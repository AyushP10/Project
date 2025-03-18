
'use client';
import { IconLoader3, IconSend2 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  task: Yup.string().min(4, 'Too Short!').required('At least Add Task Title!')



});


const Tasks = () => {

  const router = useRouter();

  // Initializing Formik
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      task: '',
      details: '',
      deadline: ''
    },
    onSubmit: (value, { resetForm, setSubmitting }) => {
      console.log(value);

      //Send values to backend
      // Sending Request to Backend  
      axios.post('http://localhost:5000/tasks/add', value)
      .then((result) => {
        toast.success('Task Added Successfully');
        resetForm();
        // router.push('/login');
      }).catch((err) => {
        console.log(err);
        toast.error('Something Went Wrong');
        setSubmitting(false);
      });

    },
    validationSchema: SignupSchema
  })




  return (
    <div className='max-w-xl mx-auto'>  
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                New Task Setup
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Add new Task for the Employee
              
              </p>
  </div>
    <div className="mt-5">
      
      
      {/* Form */}
      <form onSubmit={signupForm.handleSubmit}>
        <div className="grid gap-y-4">
          {/* Form Group */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white"
            >
              Employee Name 
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                className="border-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                {/* <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg> */}
              </div>
            </div>
            {
              (signupForm.touched.name && signupForm.errors.name) && 
              (
                <p className="text-xs text-red-600 mt-2" id="email-error">
                  {signupForm.errors.name}
                </p>

              )
            }
          </div>
          {/* End Form Group */}
          {/* Form Group */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 dark:text-white"
            >
              Employee Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                className="border-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                {/* <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg> */}
              </div>
            </div>
            {
              (signupForm.touched.email && signupForm.errors.email) && 
              (
                <p className="text-xs text-red-600 mt-2" id="email-error">
                  {signupForm.errors.email}
                </p>

              )
            }
          </div>
          {/* End Form Group */}
          

          {/* Form Group */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white"
            >
              Task Title
            </label>
            <div className="relative">
              <input
                type="text"
                id="task"
                onChange={signupForm.handleChange}
                value={signupForm.values.task}
                className="border-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            {
              (signupForm.touched.name && signupForm.errors.name) && 
              (
                <p className="text-xs text-red-600 mt-2" id="email-error">
                  {signupForm.errors.name}
                </p>

              )
            }
          </div>
          {/* End Form Group */}


            {/* Form Group */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white"
            >
              Task Description 
            </label>
            <div className="relative">
              <input
                type="text"
                id="details"
                onChange={signupForm.handleChange}
                value={signupForm.values.details}
                className="border-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            {
              (signupForm.touched.name && signupForm.errors.name) && 
              (
                <p className="text-xs text-red-600 mt-2" id="email-error">
                  {signupForm.errors.name}
                </p>

              )
            }
          </div>
          {/* End Form Group */}


          {/* Form Group */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 dark:text-white"
            >
              Deadline
            </label>
            <div className="relative">
              <input
                type="text"
                id="deadline"
                onChange={signupForm.handleChange}
                value={signupForm.values.deadline}
                className="border-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                required=""
                aria-describedby="email-error"
              />
              <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                <svg
                  className="size-5 text-red-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            {
              (signupForm.touched.name && signupForm.errors.name) && 
              (
                <p className="text-xs text-red-600 mt-2" id="email-error">
                  {signupForm.errors.name}
                </p>

              )
            }
          </div>
          {/* End Form Group */}

          
          
          <button
            disabled={signupForm.isSubmitting}
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {
              signupForm.isSubmitting ? <IconLoader3 className='animate-spin' /> :
              <IconSend2 />
            }
            Send Task
          </button>
        </div>
      </form>
      {/* End Form */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Tasks

