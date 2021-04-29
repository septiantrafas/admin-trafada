import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dhhknjwtnaoyrjdgvqdj.supabase1.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTg1MjAxMCwiZXhwIjoxOTMxNDI4MDEwfQ.PZtrW8vYSjrpZQQ6OX-a-oD4jXHcmNWrmC7OPtBX-lc'
const supabase = createClient(supabaseUrl, supabaseKey)

const initialState = {
  employeeList: [],
  employeeListStatus: 'idle',
  employeeListError: null,
  employeeById: [],
  employeeByIdStatus: 'idle',
  employeeByIdError: null,
  createEmployee: [],
  createEmployeeStatus: 'idle',
  createEmployeeError: null,
  employeeDelete: [],
  employeeDeleteStatus: 'idle',
  employeeDeleteError: null,
  employeeUpdate: [],
  employeeUpdateStatus: 'idle',
  employeeUpdateError: null,
}

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const response = await supabase.from('employees').select()
    return response
  },
)

export const fetchEmployeeById = createAsyncThunk(
  'employees/fetchEmployeeById',
  async (id) => {
    const response = await supabase.from('employees').select('*').eq('id', id)
    return response
  },
)

export const createNewEmployee = createAsyncThunk(
  'employees/createNewEmployee',
  async (data) => {
    const response = await supabase.from('employees').insert([data])
    return response
  },
)

export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (id) => {
    await supabase.from('employees').delete().match({ id: id })
    return id
  },
)

export const updateEmployee = createAsyncThunk(
  'employees/updateEmployee',
  async (updatedData) => {
    const { data, error } = await supabase
      .from('employees')
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

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    clearEmployeeByIdData: (state) => {
      state.employeeById = []
    },
    clearEmployeeByIdStatus: (state) => {
      state.employeeByIdStatus = 'idle'
    },
    clearEmployeeDeleteStatus: (state) => {
      state.employeeDeleteStatus = 'idle'
    },
  },
  extraReducers: {
    [fetchEmployees.pending]: (state) => {
      state.employeeListStatus = 'loading'
    },
    [fetchEmployees.fulfilled]: (state, action) => {
      state.employeeListStatus = 'succeeded'
      state.employeeList = state.employeeList.concat(action.payload.data)
    },
    [fetchEmployees.rejected]: (state, action) => {
      state.employeeListStatus = 'failed'
      state.employeeListError = action.error.message
    },
    [fetchEmployeeById.pending]: (state) => {
      state.employeeByIdStatus = 'loading'
    },
    [fetchEmployeeById.fulfilled]: (state, action) => {
      state.employeeByIdStatus = 'succeeded'
      state.employeeById = action.payload.data[0]
    },
    [fetchEmployeeById.rejected]: (state, action) => {
      state.employeeByIdStatus = 'failed'
      state.employeeByIdError = action.error.message
    },
    [createNewEmployee.pending]: (state) => {
      state.createEmployeeStatus = 'loading'
    },
    [createNewEmployee.fulfilled]: (state, action) => {
      state.createEmployeeStatus = 'succeeded'
      state.employeeList = state.employeeList.concat(action.payload.data[0])
    },
    [createNewEmployee.rejected]: (state, action) => {
      state.createEmployeeStatus = 'failed'
      state.createCustomerError = action.error.message
    },
    [deleteEmployee.pending]: (state) => {
      state.employeeDeleteStatus = 'loading'
    },
    [deleteEmployee.fulfilled]: (state, action) => {
      state.employeeDeleteStatus = 'succeeded'
      state.employeeDelete = action.payload.data
      const array = current(state.employeeList)
      // eslint-disable-next-line eqeqeq
      const temp = array.filter((element) => element.id != action.payload)
      state.employeeList = temp
    },
    [deleteEmployee.rejected]: (state, action) => {
      state.employeeDeleteStatus = 'failed'
      state.employeeDeleteError = action.error.message
    },
    [updateEmployee.pending]: (state) => {
      state.employeeUpdateStatus = 'loading'
    },
    [updateEmployee.fulfilled]: (state, action) => {
      state.employeeUpdateStatus = 'succeeded'
      state.employeeUpdate = action.payload.data
    },
    [updateEmployee.rejected]: (state, action) => {
      state.employeeUpdateStatus = 'failed'
      state.employeeUpdateError = action.error.message
    },
  },
})

export const {
  clearEmployeeByIdData,
  clearEmployeeByIdStatus,
  clearEmployeeDeleteStatus,
} = employeesSlice.actions

export default employeesSlice.reducer
