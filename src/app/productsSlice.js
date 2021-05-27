import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dhhknjwtnaoyrjdgvqdj.supabase1.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTg1MjAxMCwiZXhwIjoxOTMxNDI4MDEwfQ.PZtrW8vYSjrpZQQ6OX-a-oD4jXHcmNWrmC7OPtBX-lc'
const supabase = createClient(supabaseUrl, supabaseKey)

const initialState = {
  productList: [],
  productListStatus: 'idle',
  productListError: null,
  productById: [],
  productByIdStatus: 'idle',
  productByIdError: null,
  createProduct: [],
  createProductStatus: 'idle',
  createProductError: null,
  productDelete: [],
  productDeleteStatus: 'idle',
  productDeleteError: null,
  productUpdate: [],
  productUpdateStatus: 'idle',
  productUpdateError: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await supabase.from('products').select()
    return response
  },
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => {
    const response = await supabase.from('products').select('*').eq('id', id)
    return response
  },
)

export const createNewProduct = createAsyncThunk(
  'products/createNewProduct',
  async (data) => {
    const response = await supabase.from('products').insert([data])
    return response
  },
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    await supabase.from('products').delete().match({ id: id })
    return id
  },
)

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (updatedData) => {
    const { data, error } = await supabase
      .from('products')
      .update({
        address: updatedData.address,
        email: updatedData.email,
        name: updatedData.name,
        phone: updatedData.phone,
        pic_name: updatedData.pic_name,
      })
      .eq('id', updatedData.id)
    // if (error) return error
    return data
  },
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProductByIdData: (state) => {
      state.productById = []
    },
    clearProductByIdStatus: (state) => {
      state.productByIdStatus = 'idle'
    },
    clearProductDeleteStatus: (state) => {
      state.productDeleteStatus = 'idle'
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.productListStatus = 'loading'
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.productListStatus = 'succeeded'
      state.productList = state.productList.concat(action.payload.data)
    },
    [fetchProducts.rejected]: (state, action) => {
      state.productListStatus = 'failed'
      state.productListError = action.error.message
    },
    [fetchProductById.pending]: (state) => {
      state.productByIdStatus = 'loading'
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.productByIdStatus = 'succeeded'
      state.productById = action.payload.data[0]
    },
    [fetchProductById.rejected]: (state, action) => {
      state.productByIdStatus = 'failed'
      state.productByIdError = action.error.message
    },
    [createNewProduct.pending]: (state) => {
      state.createProductStatus = 'loading'
    },
    [createNewProduct.fulfilled]: (state, action) => {
      state.createProductStatus = 'succeeded'
      state.productList = state.productList.concat(action.payload.data[0])
    },
    [createNewProduct.rejected]: (state, action) => {
      state.createProductStatus = 'failed'
      state.createCustomerError = action.error.message
    },
    [deleteProduct.pending]: (state) => {
      state.productDeleteStatus = 'loading'
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.productDeleteStatus = 'succeeded'
      state.productDelete = action.payload.data
      const array = current(state.productList)
      // eslint-disable-next-line eqeqeq
      const temp = array.filter((element) => element.id != action.payload)
      state.productList = temp
    },
    [deleteProduct.rejected]: (state, action) => {
      state.productDeleteStatus = 'failed'
      state.productDeleteError = action.error.message
    },
    [updateProduct.pending]: (state) => {
      state.productUpdateStatus = 'loading'
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.productUpdateStatus = 'succeeded'
      state.productUpdate = action.payload.data
    },
    [updateProduct.rejected]: (state, action) => {
      state.productUpdateStatus = 'failed'
      state.productUpdateError = action.error.message
    },
  },
})

export const {
  clearProductByIdData,
  clearProductByIdStatus,
  clearProductDeleteStatus,
} = productsSlice.actions

export default productsSlice.reducer
