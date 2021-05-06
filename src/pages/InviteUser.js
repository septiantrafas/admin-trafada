import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useForm } from 'react-hook-form'
import PageTitle from '../components/Typography/PageTitle'
import { Input, Label, Button } from '@windmill/react-ui'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser, fetchUsers, updateUser } from '../app/usersSlice'
import { unwrapResult } from '@reduxjs/toolkit'

function InviteUser() {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const users = useSelector((state) => state.users.usersList)
  const usersStatus = useSelector((state) => state.users.usersListStatus)
  console.log(usersStatus)
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const canSave = addRequestStatus === 'idle'

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [usersStatus, dispatch])

  const onSubmit = async (data) => {
    if (canSave)
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(createNewUser(data))
        unwrapResult(resultAction)
      } catch (e) {
        console.log(e)
      } finally {
        setAddRequestStatus('idle')
      }
  }

  // const data = React.useMemo(() => users, [users])

  return (
    <>
      <PageTitle>Invite new user</PageTitle>
      <hr />
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Label>
            <span>Email</span>
            <Input
              defaultValue=""
              {...register('email', { required: true })}
              type="email"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Label>
          <Label>
            <span>Password</span>
            <Input
              defaultValue=""
              {...register('password', { required: true })}
              type="password"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Label>
          <Button className="my-4" type="submit" size="small">
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default InviteUser
