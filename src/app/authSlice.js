import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://pqgshvuayyplvgunngpe.supabase.co'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODQ3NDY4NiwiZXhwIjoxOTM0MDUwNjg2fQ.VYNaMxPSys8eWmdctV-x9j8t-VbLzJLvD5grYpoFEJo'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const initialState = {
  authList: [],
  authListStatus: 'idle',
  authListError: null,
}

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (data) => {
  const { user, session, error } = await supabase.auth.signIn({
    email: data.email,
    password: data.password,
  })
  return user
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthByIdData: (state) => {
      state.authList = []
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.authListStatus = 'loading'
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.authListStatus = 'succeeded'
      state.authList = state.authList.concat(action.payload)
    },
    [fetchAuth.rejected]: (state, action) => {
      state.authListStatus = 'failed'
      state.authListError = action.error.message
    },
  },
})

export const { clearAuthByIdData } = authSlice.actions

export default authSlice.reducer
