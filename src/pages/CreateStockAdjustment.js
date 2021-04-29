import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Input,
  Label,
  Select,
  Textarea,
  Button,
  Card,
  CardBody,
} from '@windmill/react-ui'
import { useForm, useFieldArray, useWatch, Controller } from 'react-hook-form'

const ConditionalInput = ({ control, index, register, field }) => {
  const value = useWatch({
    name: 'product',
    control,
  })
  console.log(value)
  return (
    <Input
      control={control}
      name={`product.${index}.actual`}
      {...register(`product.${index}.actual`)}
      defaultValue={field.actual}
      disabled
    />
  )
}

function CreateStockAdjustment() {
  const { handleSubmit, control, register } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'product',
  })
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <PageTitle>Create new stock adjustment</PageTitle>
      <hr />
      <Card className="mt-4">
        <CardBody>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <Label>
                <span>Adjustment type</span>
                <Select className="mt-1" {...register('type')}>
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option value="Irene">Opening quantity</option>
                  <option value="Jeil">Broken</option>
                  <option value="Jeil">Expired</option>
                </Select>
              </Label>
              <Label>
                <span>Account</span>
                <Select className="mt-1" {...register('account')}>
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option value="Irene">Opening quantity</option>
                  <option value="Jeil">Broken</option>
                  <option value="Jeil">Expired</option>
                </Select>
              </Label>
              <Label></Label>
              <Label></Label>
              <Label>
                <span>Date</span>
                <Input className="mt-1" {...register('product_code')} />
              </Label>
              <Label>
                <span>Warehouse</span>
                <Select className="mt-1" {...register('warehouse')}>
                  <option disabled selected value>
                    -- select an option --
                  </option>
                  <option value="Irene">Opening quantity</option>
                  <option value="Jeil">Broken</option>
                  <option value="Jeil">Expired</option>
                </Select>
              </Label>
              <Label>
                <span>Note</span>
                <Input className="mt-1" {...register('note')} />
              </Label>
              <Label></Label>
            </div>
            <TableContainer className="my-8">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Product name</TableCell>
                    <TableCell>Product code</TableCell>
                    <TableCell>Recorded quantity</TableCell>
                    <TableCell>Actual quantity</TableCell>
                    <TableCell>Difference</TableCell>
                    <TableCell>Last buy price</TableCell>
                    <TableCell></TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {fields.map((field, index) => {
                    return (
                      <TableRow key={field.id}>
                        <TableCell>
                          <Input
                            className="mt-1"
                            defaultValue={field.name}
                            {...register(`product.${index}.name`)}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            className="mt-1"
                            defaultValue={field.code}
                            {...register(`product.${index}.code`)}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            className="mt-1"
                            defaultValue={field.recorded}
                            {...register(`product.${index}.recorded`)}
                          />
                        </TableCell>
                        <TableCell>
                          <ConditionalInput
                            {...{ control, index, field, register }}
                          />
                        </TableCell>
                        <TableCell>
                          <Input
                            className="mt-1"
                            defaultValue={field.difference}
                            {...register(`product.${index}.difference`)}
                          />
                        </TableCell>

                        <TableCell>
                          <Input
                            className="mt-1"
                            defaultValue={field.last_buy}
                            {...register(`product.${index}.last_buy`)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            type="button"
                            size="small"
                            onClick={() => remove(index)}
                          >
                            -
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  <Button
                    className="mx-4 my-3"
                    type="button"
                    size="small"
                    onClick={() => append({})}
                  >
                    +
                  </Button>
                </TableBody>
              </Table>
            </TableContainer>
            <div className="flex float-right mb-5">
              <Button type="submit" size="small">
                submit
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  )
}

export default CreateStockAdjustment
