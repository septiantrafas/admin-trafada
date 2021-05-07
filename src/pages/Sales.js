import React, { useEffect, useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'
import { PeopleIcon, EditIcon, TrashIcon } from '../icons'
import { Link } from 'react-router-dom'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Button,
  Pagination,
} from '@windmill/react-ui'

import response from '../utils/demo/tableData'
const response2 = response.concat([])

function Sales() {
  const [dropDown, setDropDown] = useState(false)
  // setup pages control for every table
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 5
  const totalResults = response.length

  // pagination change control

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(
      response2.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage,
      ),
    )
  }, [pageTable2])
  const drop = (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div className="py-1" role="none">
        <Link
          to="sales/sales-quote/new"
          className="text-gray-400 hover:text-gray-700 block px-4 py-2 text-sm "
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
        >
          Sales Quote
        </Link>
        <Link
          to="sales/sales-order/new"
          className="text-gray-400 hover:text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabindex="-1"
          id="menu-item-1"
        >
          Sales Order
        </Link>
        <Link
          to="sales/sales-invoice/new"
          className="text-gray-400 hover:text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
        >
          Sales Invoice
        </Link>
      </div>
    </div>
  )
  return (
    <>
      <PageTitle>
        <div className="flex justify-between">
          <div>Sales</div>
          <div className="relative inline-block text-left">
            <div>
              <Button
                type="button"
                size="small"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setDropDown(!dropDown)}
              >
                New
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Button>
              {dropDown ? drop : ''}
            </div>
          </div>
        </div>
      </PageTitle>
      <div className="grid gap-6 mt-4 mb-4 md:grid-cols-1 xl:grid-cols-3">
        <InfoCard title="Open Invoices" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Overdue Invoices" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Sales Delivery" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Date</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar
                className="hidden mr-3 md:block"
                src={user.avatar}
                alt="User avatar"
              /> */}
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.job}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}

export default Sales
