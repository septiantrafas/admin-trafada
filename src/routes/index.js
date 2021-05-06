import { lazy } from 'react'

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
const CreateWarehouse = lazy(() => import('../pages/CreateWarehouse'))
const Product = lazy(() => import('../pages/Product'))
const CreateProduct = lazy(() => import('../pages/CreateProduct'))
const StockAdjustment = lazy(() => import('../pages/StockAdjustment'))
const CreateStockAdjustment = lazy(() =>
  import('../pages/CreateStockAdjustment'),
)
const InviteUser = lazy(() => import('../pages/InviteUser.js'))
const Sales = lazy(() => import('../pages/Sales'))
const Shipment = lazy(() => import('../pages/Shipment'))
const Purchases = lazy(() => import('../pages/Purchases'))
const Expenses = lazy(() => import('../pages/Expenses'))
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
    path: '/new-user', // the url
    component: InviteUser, // view rendered
  },
  {
    path: '/purchases', // the url
    component: Purchases, // view rendered
  },
  {
    path: '/expenses', // the url
    component: Expenses, // view rendered
  },
  {
    path: '/shipment', // the url
    component: Shipment, // view rendered
  },
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
    path: '/product',
    component: Product,
  },
  {
    path: '/product/new',
    component: CreateProduct,
  },
  {
    path: '/product/stock-adjustment',
    component: StockAdjustment,
  },
  {
    path: '/product/stock-adjustment/new',
    component: CreateStockAdjustment,
  },
  {
    path: '/sales',
    component: Sales,
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
