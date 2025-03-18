'use client';
import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
// import Navbar from '@/Components/Navbar';






const Login = () => {
  // const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);

      axios.post('http://localhost:5000/user/authenticate', values)
        .then((result) => {
          toast.success('Login Successful');
          console.log(result.data?.token);
          localStorage.setItem('token', result.data?.token)
          router.push('/')

        }).catch((err) => {
          console.log(err);
          toast.error('Login Failed')

        });

    }
  })
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Employee Login
        </h2>
        <form onSubmit={loginForm.handleSubmit} className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                type='email'
                id="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>
            <button
            type='submit'
            className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              Log in
            </button>

          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                Manager SignUp
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
