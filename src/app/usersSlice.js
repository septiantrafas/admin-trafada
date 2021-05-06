import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://pqgshvuayyplvgunngpe.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODQ3NDY4NiwiZXhwIjoxOTM0MDUwNjg2fQ.VYNaMxPSys8eWmdctV-x9j8t-VbLzJLvD5grYpoFEJo'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const initialState = {
  usersList: [],
  usersListStatus: 'idle',
  usersListError: null,
  userById: [],
  userByIdStatus: 'idle',
  userByIdError: null,
  createUser: [],
  createUserStatus: 'idle',
  createUserError: null,
  userDelete: [],
  userDeleteStatus: 'idle',
  userDeleteError: null,
  userUpdate: [],
  userUpdateStatus: 'idle',
  userUpdateError: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await supabase.from('users').select()
  return response
})

export const updateUser = createAsyncThunk('users/updateUser', async (data) => {
  const { user, error } = await supabase.auth.update({
    role: data.role,
  })
  return user
})

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id) => {
    const response = await supabase.from('users').select('*').eq('id', id)
    return response
  },
)

export const createNewUser = createAsyncThunk(
  'users/createNewUser',
  async (data) => {
    const response = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    })
    return response
  },
)

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await supabase.from('auth.users').delete().match({ id: id })
  return id
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUserByIdData: (state) => {
      state.userById = []
    },
    clearUserByIdStatus: (state) => {
      state.userByIdStatus = 'idle'
    },
    clearUserDeleteStatus: (state) => {
      state.userDeleteStatus = 'idle'
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.usersListStatus = 'loading'
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.usersListStatus = 'succeeded'
      state.usersList = state.usersList.concat(action.payload.data)
    },
    [fetchUsers.rejected]: (state, action) => {
      state.usersListStatus = 'failed'
      state.usersListError = action.error.message
    },
    [fetchUserById.pending]: (state) => {
      state.userByIdStatus = 'loading'
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.userByIdStatus = 'succeeded'
      state.userById = action.payload.data[0]
    },
    [fetchUserById.rejected]: (state, action) => {
      state.userByIdStatus = 'failed'
      state.userByIdError = action.error.message
    },
    [createNewUser.pending]: (state) => {
      state.createUserStatus = 'loading'
    },
    [createNewUser.fulfilled]: (state, action) => {
      state.createUserStatus = 'succeeded'
      state.usersList = state.usersList.concat(action.payload.data)
    },
    [createNewUser.rejected]: (state, action) => {
      state.createUserStatus = 'failed'
      state.createCustomerError = action.error.message
    },
    [deleteUser.pending]: (state) => {
      state.userDeleteStatus = 'loading'
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.userDeleteStatus = 'succeeded'
      state.userDelete = action.payload.data
      const array = current(state.usersList)
      // eslint-disable-next-line eqeqeq
      const temp = array.filter((element) => element.id != action.payload)
      state.usersList = temp
    },
    [deleteUser.rejected]: (state, action) => {
      state.userDeleteStatus = 'failed'
      state.userDeleteError = action.error.message
    },
    [updateUser.pending]: (state) => {
      state.userUpdateStatus = 'loading'
    },
    [updateUser.fulfilled]: (state, action) => {
      state.userUpdateStatus = 'succeeded'
      state.userUpdate = action.payload.data
    },
    [updateUser.rejected]: (state, action) => {
      state.userUpdateStatus = 'failed'
      state.userUpdateError = action.error.message
    },
  },
})

export const {
  clearUserByIdData,
  clearUserByIdStatus,
  clearUserDeleteStatus,
} = usersSlice.actions

export default usersSlice.reducer
