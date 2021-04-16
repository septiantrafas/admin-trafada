import { lazy } from 'react'
import CreateWarehouse from '../pages/CreateWarehouse'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const CreateContact = lazy(() => import('../pages/CreateContact'))
const Employee = lazy(() => import('../pages/Employee'))
const Vendor = lazy(() => import('../pages/Vendor'))
const Customer = lazy(() => import('../pages/Customer'))
const Warehouse = lazy(() => import('../pages/Warehouse'))
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/contact/new',
    component: CreateContact,
  },
  {
    path: '/contact/employee',
    component: Employee,
  },
  {
    path: '/contact/vendor',
    component: Vendor,
  },
  {
    path: '/contact/customer',
    component: Customer,
  },
  {
    path: '/warehouse',
    component: Warehouse,
  },
  {
    path: '/warehouse/new',
    component: CreateWarehouse,
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
