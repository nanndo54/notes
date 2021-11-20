import { User } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/Login.module.css'
import { Redirect } from 'wouter'

interface IForm extends User {
  password: string
}

const Login = () => {
  const user = useAppSelector((state) => state.user)

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<IForm>()

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IForm> = (user) => {
    dispatch(loginUser(user))
  }

  return user.username === '' ? (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='control'>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            className={errors.username?.type === 'required' ? 'error-input' : ''}
            {...register('username', { required: true })}
          />
          {errors.username?.type === 'required' && (
            <div className='error-msg'>First name is required</div>
          )}
        </div>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input id='password' {...register('password')} type='password' />
        </div>
        <button>Log in</button>
      </form>
    </div>
  ) : (
    <Redirect to='/' />
  )
}

export default Login
