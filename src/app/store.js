import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import employeesReducer from './employeesSlice'
import usersReducer from './usersSlice'
export default configureStore({
  reducer: {
    auth: authSlice,
    users: usersReducer,
    employees: employeesReducer,
  },
})
