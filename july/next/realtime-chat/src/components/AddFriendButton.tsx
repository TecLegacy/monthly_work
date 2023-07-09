import { FC } from 'react';
import Button from './ui/Button';
import { set, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { emailValidation } from '@/lib/add-friend';
import axios, { AxiosError } from 'axios';

type FormValue = z.infer<typeof emailValidation>;

const AddFriendButton: FC = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValue>({ resolver: zodResolver(emailValidation) });

  //Add Friend
  async function addFriend(email: string) {
    const verifiedEmail = emailValidation.parse(email);

    try {
      axios.post('/api/friends/add');
    } catch (err) {
      if (err instanceof AxiosError) {
        setError('email', { message: 'Failed Request' });
        return;
      }

      if (err instanceof z.ZodError) {
        setError('email', { message: 'Failed Validation' });
        return;
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm'>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Feed your Email
        </label>
        <div className='mt-2 flex gap-4'>
          <input
            {...register('email')}
            placeholder='your@email.com'
            type='text'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <Button> Add </Button>
        </div>
      </form>
    </>
  );
};

export default AddFriendButton;
