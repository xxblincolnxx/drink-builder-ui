import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type LoginFormProps = {
  toggleForm: () => void;
};

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = ({ toggleForm }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form
        className='flex flex-col items-center '
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-element'>
          <label className='text-sm font-medium' htmlFor='email'>
            Email
          </label>
          <input
            className='form-input'
            autoComplete='email'
            type='email'
            {...register('email', { required: true })}
            placeholder='Email'
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>
        <div className='form-element'>
          <label className='text-sm font-medium' htmlFor='password'>
            Password
          </label>
          <input
            className='form-input'
            autoComplete='current-password'
            type='password'
            {...register('password', { required: true })}
            placeholder='Password'
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='form-element'>
          <button className='primary-btn' type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      <div className='form-element'>
        <h1 className='text-2xl font-bold mt-20'>Don't have an account?</h1>
        <button className='link-btn' onClick={toggleForm}>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
