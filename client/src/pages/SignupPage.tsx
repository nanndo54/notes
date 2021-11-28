import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { User } from 'notes-types'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/SignupPage.module.css'

const SignupPage: FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    setFocus
  } = useForm<User>()

  useEffect(() => {
    setFocus('username')
  }, [])

  const { handleSignupUser } = useUser()

  const handleSubmitForm: SubmitHandler<User> = (user) => {
    handleSignupUser(user)
  }

  return (
    <div className={styles.base}>
      <form
        autoComplete='off'
        className='regular'
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <h2>Sign up</h2>
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
        <Button variant='primary'>Sign up</Button>
      </form>
    </div>
  )
}

export default SignupPage
