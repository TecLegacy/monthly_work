'use client';
import { FC, useState } from 'react';
import Button from './ui/Button';
import { set, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { emailValidation } from '@/lib/add-friend';
import axios, { AxiosError } from 'axios';

type FormValue = z.infer<typeof emailValidation>;

const AddFriendButton: FC = ({}) => {
  const [showSuccessState, setShowSuccessState] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValue>({ resolver: zodResolver(emailValidation) });

  //Add Friend
  async function addFriend(email: string) {
    try {
      const validatedEmail = emailValidation.parse({
        email,
      });

      await axios.post('/api/friends/add', {
        email: validatedEmail,
      });

      setShowSuccessState(true);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError('email', { message: 'Failed Request' });
        return;
      }

      if (err instanceof z.ZodError) {
        setError('email', { message: 'Failed Validation' });
        return;
      }

      setError('email', { message: 'Something went wrong.' });
    }
  }

  const onSubmit = (data: FormValue) => {
    addFriend(data.email);
  };

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
          <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p>
          {showSuccessState ? (
            <p className='mt-1 text-sm text-green-600'>Friend request sent!</p>
          ) : null}
          <Button> Add </Button>
        </div>
      </form>
    </>
  );
};

export default AddFriendButton;
