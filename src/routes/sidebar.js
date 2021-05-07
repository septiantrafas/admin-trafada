/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  // {
  //   path: '/app/dashboard', // the url
  //   icon: 'HomeIcon', // the component being exported from icons/index.js
  //   name: 'Dashboard', // name that appear in Sidebar
  // },
  {
    path: '/app/dashboard', // the url
    icon: 'DashboardIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/sales',
    icon: 'SalesIcon',
    name: 'Sales',
  },
  {
    path: '/app/shipment',
    icon: 'MailIcon',
    name: 'Shipment',
  },
  {
    path: '/app/purchases',
    icon: 'PurchasesIcon',
    name: 'Purchases',
  },
  {
    path: '/app/expenses',
    icon: 'ExpensesIcon',
    name: 'Expenses',
  },
  {
    path: '/app/warehouse',
    icon: 'WarehouseIcon',
    name: 'Warehouse',
  },
  {
    path: '/app/product',
    icon: 'ProductIcon',
    name: 'Product',
  },
  {
    icon: 'ContactIcon',
    name: 'Contact',
    routes: [
      {
        path: '/app/contact/employee',
        name: 'Employee',
      },
      {
        path: '/app/contact/customer',
        name: 'Customer',
      },
      {
        path: '/app/contact/vendor',
        name: 'Vendor',
      },
    ],
  },
  {
    path: '/app/new-user',
    icon: 'PeopleIcon',
    name: 'Invite new user',
  },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/app/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
