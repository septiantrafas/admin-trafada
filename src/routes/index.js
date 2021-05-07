import { lazy } from 'react'

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

const routes = [
  {
    path: '/new-user',
    component: InviteUser,
  },
  {
    path: '/purchases',
    component: Purchases,
  },
  {
    path: '/expenses',
    component: Expenses,
  },
  {
    path: '/shipment',
    component: Shipment,
  },
  {
    path: '/dashboard',
    component: Dashboard,
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
