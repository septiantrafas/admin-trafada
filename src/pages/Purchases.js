import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'
import { PeopleIcon } from '../icons'
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

function Purchases() {
  const [dropDown, setDropDown] = useState(false)
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
          Quotation
        </Link>
        <Link
          to="sales/sales-order/new"
          className="text-gray-400 hover:text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabindex="-1"
          id="menu-item-1"
        >
          Purchase Order
        </Link>
      </div>
    </div>
  )
  return (
    <>
      <PageTitle>
        <div className="flex justify-between">
          <div>Purchases</div>
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
      <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Available Stock" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Low Stock" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Out of Stock" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard
          link="product/stock-adjustment"
          title="Stock Adjustment"
          value="6389"
        >
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
    </>
  )
}

export default Purchases
