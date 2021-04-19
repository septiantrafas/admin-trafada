import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import { Link } from 'react-router-dom'
function InfoCard({ title, value, children: icon, link }) {
  return (
    <Link to={link}>
      <Card>
        <CardBody className="flex items-center">
          {icon}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {value}
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

export default InfoCard
