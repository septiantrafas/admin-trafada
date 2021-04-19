import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { useForm } from 'react-hook-form'
import { Input, Label, Select, Textarea, Button } from '@windmill/react-ui'

function CreateProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <PageTitle>Create new product</PageTitle>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mt-4 mb-4 md:grid-cols-2 xl:grid-cols-1">
          <Label>
            <span>Brand</span>
            <Select className="mt-1" name="unit" ref={register()}>
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="Irene">Irene</option>
              <option value="Jeil">Jeil</option>
            </Select>
          </Label>
          <Label>
            <span>Catalog Number</span>
            <Input
              className="mt-1"
              key="b"
              name="product_code"
              ref={register()}
            />
          </Label>
          <Label>
            <span>Product name</span>
            <Input
              className="mt-1"
              key="a"
              name="product_name"
              ref={register()}
            />
          </Label>
          <Label>
            <span>Product code</span>
            <Input
              className="mt-1"
              key="b"
              name="product_code"
              ref={register()}
            />
          </Label>

          <Label>
            <span>Category</span>
            <Input className="mt-1" name="category" ref={register()} />
          </Label>
          <Label>
            <span>Unit</span>
            <Select className="mt-1" name="unit" ref={register()}>
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="kgs">Kgs</option>
              <option value="pcs">Pcs</option>
              <option value="set">Set</option>
            </Select>
          </Label>
          <Label className="mt-4">
            <span>Specification</span>
            <Textarea
              className="mt-1"
              rows="3"
              name="specification"
              ref={register()}
            />
          </Label>
          <Label className="mt-4">
            <span>Description</span>
            <Textarea
              className="mt-1"
              rows="3"
              name="description"
              ref={register()}
            />
          </Label>
          <Label>
            <span>Minimum stock quantity</span>
            <Input className="mt-1" name="min_stock" ref={register()} />
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

export default CreateProduct
