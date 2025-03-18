
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#FFDDD2]">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between py-3 ">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >

            WorkForce
          </a>
          {/* logo - end */}
          {/* nav - start */}
          <nav className="hidden gap-12 lg:flex">
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#E29578] active:text-indigo-700"
            >
              Home
            </a>

            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#E29578] active:text-indigo-700"
            >
              About
            </a>


            <a
              href="#"
              className="inline-flex items-center gap-1 text-lg font-semibold text-[#E29578]"
            >
              Services

            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#E29578] active:text-indigo-700"
            >
              Pricing
            </a>
            
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#E29578] active:text-indigo-700"
            >
              Contact
            </a>


          </nav>
          {/* nav - end */}
          {/* buttons - start */}
          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
            <a
              href="#"
              className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:text-black hover:font-bold focus-visible:ring active:text-indigo-600 md:text-base"
            >
              Login
            </a>
            <a
              href="#"
              className="inline-block rounded-lg bg-[#E29578] px-2 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#83C5BE] focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Manager
            </a>

            <a
              href="#"
              className="inline-block rounded-lg bg-[#E29578] px-2 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#83C5BE] focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Employee
            </a>




          </div>

        </header>

      </div>
    </div>


  )
}

export default Navbar


//     <div>

//         <>

//         <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       {/* <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//       </svg> */}
//       <span className="ml-3 text-blue-4 00 text-2xl">WorkForce</span>
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 text-gray-800 text-l font-bold hover:text-blue-900">Home</a>
//       <a className="mr-5 text-gray-800 text-l font-bold hover:text-blue-900">About</a>
//       <a className="mr-5 text-gray-800 text-l font-bold hover:text-blue-900">Contact</a>
//       <a className="mr-5 text-gray-800 text-l font-bold hover:text-blue-900"></a>
//     </nav>
//     <button className="inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//       Manager
//       <svg
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         className="w-4 h-4 ml-1"
//         viewBox="0 0 24 24"
//       >
//         <path d="M5 12h14M12 5l7 7-7 7" />
//       </svg>
//     </button>

//     {/* Employee Signup  */}
//     <button className="inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//       Employee
//       <svg
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         className="w-4 h-4 ml-1"
//         viewBox="0 0 24 24"
//       >
//         <path d="M5 12h14M12 5l7 7-7 7" />
//       </svg>
//     </button>



//   </div>
// </header>




//         </>



//     </div>