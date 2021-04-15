import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Select, Button } from '@windmill/react-ui'
import { useForm } from 'react-hook-form'

function EditContact() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <PageTitle>Create new contact</PageTitle>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-2">
          <Label>
            <span>Display name</span>
            <Input className="mt-1" name="display_name" ref={register()} />
          </Label>
          <Label>
            <span>Contact type</span>
            <Select className="mt-1" name="type" ref={register()}>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
              <option value="employee">Employee</option>
            </Select>
          </Label>
        </div>
        <hr />
        <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-2">
          <Label>
            <span>Contact name</span>
            <Input className="mt-1" name="name" ref={register()} />
          </Label>
          <Label>
            <span>Handhone</span>
            <Input className="mt-1" name="handphone" ref={register()} />
          </Label>
          <Label>
            <span>Identity</span>
            <Input className="mt-1" name="identity" ref={register()} />
          </Label>
          <Label>
            <span>Email</span>
            <Input className="mt-1" name="email" ref={register()} />
          </Label>
          <Label>
            <span>Another info</span>
            <Input className="mt-1" name="another_info" ref={register()} />
          </Label>
          <Label>
            <span>Company name</span>
            <Input className="mt-1" name="company_name" ref={register()} />
          </Label>
          <Label>
            <span>Telephone</span>
            <Input className="mt-1" name="telephone" ref={register()} />
          </Label>
          <Label>
            <span>Fax</span>
            <Input className="mt-1" name="fax" ref={register()} />
          </Label>
          <Label>
            <span>NPWP</span>
            <Input className="mt-1" name="npwp" ref={register()} />
          </Label>
          <Label>
            <span>Billing Address</span>
            <Input className="mt-1" name="bill_address" ref={register()} />
          </Label>
          <Label>
            <span>Shipping Address</span>
            <Input className="mt-1" name="shipping_address" ref={register()} />
          </Label>
        </div>
        <hr />
        <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-2">
          <Label>
            <span>Bank name</span>
            <Input className="mt-1" name="bank_name" ref={register()} />
          </Label>
          <Label>
            <span>Bank branch</span>
            <Input className="mt-1" name="bank_branch" ref={register()} />
          </Label>
          <Label>
            <span>Bank holder name</span>
            <Input className="mt-1" name="holder_name" ref={register()} />
          </Label>
          <Label>
            <span>Account number</span>
            <Input className="mt-1" name="account_number" ref={register()} />
          </Label>
        </div>
        <div className="float-right my-4">
          <Button type="submit" size="small">
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default EditContact
