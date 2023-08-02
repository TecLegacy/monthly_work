'use client';
import { FC } from 'react';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  async function loginWithGoogle() {
    try {
      await signIn('google');
    } catch (error) {
      toast.error('Google SignIn Failed ⚠');
    }
  }

  return (
    <>
      <Button onClick={loginWithGoogle}>Login with google</Button>
    </>
  );
};

export default index;
