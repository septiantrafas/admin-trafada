import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from './employeesSlice'
import usersReducer from './usersSlice'
export default configureStore({
  reducer: { users: usersReducer, employees: employeesReducer },
})
