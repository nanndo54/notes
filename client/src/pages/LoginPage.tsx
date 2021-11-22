import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { User } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginUser } from 'slices/userSlice'
import { useAppDispatch } from 'store'
import styles from 'styles/LoginPage.module.css'
import { Redirect } from 'wouter'

interface Form extends User {
  password: string
}

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<Form>()

  const { isUserLoggedIn } = useUser()

  const dispatch = useAppDispatch()

  const handleLogin: SubmitHandler<Form> = (user) => {
    dispatch(loginUser(user))
  }

  return isUserLoggedIn ? (
    <Redirect to='/' />
  ) : (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(handleLogin)} autoComplete='off'>
        <h2>Login</h2>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            className={errors.username?.type === 'required' ? 'error-input' : ''}
            {...register('username', { required: true })}
          />
          {errors.username?.type === 'required' && (
            <div className='error'>First name is required</div>
          )}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            {...register('password', { required: true })}
            type='password'
          />
          {errors.password?.type === 'required' && (
            <div className='error'>Password is required</div>
          )}
        </div>
        <Button variant='primary'>Log in</Button>
      </form>
    </div>
  )
}

export default Login
