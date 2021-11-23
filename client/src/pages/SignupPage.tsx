import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { User } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/SignupPage.module.css'

interface Form extends User {
  password: string
}

const SignupPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<Form>()

  const { handleSignupUser } = useUser()

  const handleSubmitForm: SubmitHandler<Form> = (user) => {
    handleSignupUser(user)
  }

  return (
    <div className={styles.base}>
      <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete='off'>
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

export default SignupPage
