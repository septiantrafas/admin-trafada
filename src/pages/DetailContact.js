import React from 'react'

function DetailContact() {
  return (
    <>
      <PageTitle>Septian Indra Wicaksana</PageTitle>
      <hr />
      <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-2">
        <Label>
          <span>Display name</span>
          <Input className="mt-1" name="display_name" disabled />
        </Label>
        <Label>
          <span>Contact type</span>
          <Input className="mt-1" name="type" disabled />
        </Label>
      </div>
      <hr />
      <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-2">
        <Label>
          <span>Contact name</span>
          <Input className="mt-1" name="name" disabled />
        </Label>
        <Label>
          <span>Handhone</span>
          <Input className="mt-1" name="handphone" disabled />
        </Label>
        <Label>
          <span>Identity</span>
          <Input className="mt-1" name="identity" disabled />
        </Label>
        <Label>
          <span>Email</span>
          <Input className="mt-1" name="email" disabled />
        </Label>
        <Label>
          <span>Another info</span>
          <Input className="mt-1" name="another_info" disabled />
        </Label>
        <Label>
          <span>Company name</span>
          <Input className="mt-1" name="company_name" disabled />
        </Label>
        <Label>
          <span>Telephone</span>
          <Input className="mt-1" name="telephone" disabled />
        </Label>
        <Label>
          <span>Fax</span>
          <Input className="mt-1" name="fax" disabled />
        </Label>
        <Label>
          <span>NPWP</span>
          <Input className="mt-1" name="npwp" disabled />
        </Label>
        <Label>
          <span>Billing Address</span>
          <Input className="mt-1" name="bill_address" disabled />
        </Label>
        <Label>
          <span>Shipping Address</span>
          <Input className="mt-1" name="shipping_address" disabled />
        </Label>
      </div>
      <hr />
      <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-2">
        <Label>
          <span>Bank name</span>
          <Input className="mt-1" name="bank_name" disabled />
        </Label>
        <Label>
          <span>Bank branch</span>
          <Input className="mt-1" name="bank_branch" disabled />
        </Label>
        <Label>
          <span>Bank holder name</span>
          <Input className="mt-1" name="holder_name" disabled />
        </Label>
        <Label>
          <span>Account number</span>
          <Input className="mt-1" name="account_number" disabled />
        </Label>
      </div>
      <div className="float-right my-4">
        <Button type="submit" size="small">
          Submit
        </Button>
      </div>
    </>
  )
}

export default DetailContact
