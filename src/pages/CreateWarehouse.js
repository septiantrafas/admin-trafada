import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { useForm } from 'react-hook-form'
import { Input, Label, Select, Button } from '@windmill/react-ui'

function CreateWarehouse() {
  const { register, handleSubmit } = useForm()

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
            <Select className="mt-1" name="type" ref={register()}>
              <option value="customer">warehouse</option>
              <option value="vendor">consignment</option>
            </Select>
          </Label>
          <Label>
            <span>Code</span>
            <Input className="mt-1" name="display_name" ref={register()} />
          </Label>
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
