'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const router = useRouter();

  const handleRegister = async (ev) => {
    ev.preventDefault();
    if (!username) {
      toast.error('username is required');
    }
    if (!email) {
      toast.error('email is required');
    }
    if (!password) {
      toast.error('password is required');
    }
    if (password !== passwordConfirm) {
      toast.error('Confirm Password does not match');
      return false;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.status === 400) {
        toast.error('User email already exists');
      }

      if (res.status === 401) {
        toast.error('Username already exists');
      }

      if (res.status === 200) {
        toast.success('Success in register');
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='text-center py-14'>
      <h1 className='font-semibold text-5xl my-12'>Register</h1>
      <form
        className='w-72 flex flex-col gap-4 mx-auto my-4'
        onSubmit={handleRegister}
      >
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input
          type='password'
          placeholder='password confirm'
          value={passwordConfirm}
          onChange={(ev) => setPasswordConfirm(ev.target.value)}
        />
        <button type='submit' className='p-2 bg-blue-500 rounded-md'>
          Submit
        </button>
      </form>
      <div>
        already have an account?{' '}
        <Link href={'/login'} className='underline'>
          Login here
        </Link>
      </div>
      <ToastContainer />
    </section>
  );
};

export default RegisterPage;
