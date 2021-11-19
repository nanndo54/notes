import { loginUser } from 'actions/userActions'
import { User } from 'notes-models'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/Login.module.css'
import { Redirect } from 'wouter'

interface IForm extends User {
  password: string
}

const Login = () => {
  const user = useAppSelector((state) => state.user)
  console.log(user)

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<IForm>()

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IForm> = (user) => {
    dispatch(loginUser(user))
  }

  return user.username && user.username !== 'none' ? (
    <Redirect to='/' />
  ) : (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='control'>
          <label htmlFor='username' className={'unselectable'}>
            Username
          </label>
          <input
            id='username'
            placeholder='Walk the dog 🐕'
            className={errors.username?.type === 'required' ? 'error-input' : ''}
            {...register('username', { required: true })}
          />
          {errors.username?.type === 'required' && (
            <div className='error-msg'>First name is required</div>
          )}
        </div>
        <div className='control'>
          <label htmlFor='password' className={'unselectable'}>
            Password
          </label>
          <input
            id='password'
            placeholder="Don't forget"
            {...register('password')}
            type='password'
          />
        </div>
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login
