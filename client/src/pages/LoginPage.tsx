import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { User } from 'notes-types'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from 'styles/LoginPage.module.css'

interface Form extends User {
  password: string
}

const LoginPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<Form>()

  const { handleLoginUser } = useUser()

  const handleSubmitForm: SubmitHandler<Form> = (user) => {
    handleLoginUser(user)
  }

  return (
    <div className={styles.base}>
      <form className='regular' onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Sign in</h2>
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
        <Button variant='primary'>Sign in</Button>
      </form>
    </div>
  )
}

export default LoginPage
