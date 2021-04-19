import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { useForm } from 'react-hook-form'
import { Input, Label, Select, Button } from '@windmill/react-ui'

function CreateWarehouse() {
  const [type, setType] = useState('')
  const { register, handleSubmit } = useForm()

  function handleChange(e) {
    setType(e.target.value)
  }

  const customerId = (
    <Label>
      <span>Customer</span>
      <Select className="mt-1" name="type" ref={register()}>
        <option disabled selected value>
          -- select an option --
        </option>
        <option value="2131412">RSUD Dr. Soetomo</option>
        <option value="consignment">consignment</option>
      </Select>
    </Label>
  )

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <PageTitle>Create new warehouse</PageTitle>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-1">
          <Label>
            <span>Warehouse name</span>
            <Input className="mt-1" name="display_name" ref={register()} />
          </Label>
          <Label>
            <span>Type</span>
            <Select
              className="mt-1"
              name="type"
              ref={register()}
              onChange={handleChange}
            >
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="warehouse">warehouse</option>
              <option value="consignment">consignment</option>
            </Select>
          </Label>
          <Label>
            <span>Code</span>
            {/* <!-- focus-within sets the color for the icon when input is focused --> */}
            <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" />
              <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                <span className="w-5 h-5" aria-hidden="true">
                  {type === 'warehouse'
                    ? '10-'
                    : type === 'consignment'
                    ? '20-'
                    : ''}
                </span>
              </div>
            </div>
          </Label>
          {type === 'consignment' ? customerId : ''}
          <Label>
            <span>Address</span>
            <Input className="mt-1" name="display_name" ref={register()} />
          </Label>
          <Label>
            <span>Description</span>
            <Input className="mt-1" name="display_name" ref={register()} />
          </Label>
        </div>
      </form>
    </>
  )
}

export default CreateWarehouse
