

import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font px-16">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">


                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
                    Empowering Businesses<br/>with Stunning Websites
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Get a professionally designed website that showcases your brand and drives growth.<br/>
                    WorkForce makes web development seamless and hassle-free for businesses of all sizes
                    </p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                            <label
                                htmlFor="hero-field"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Enter Your Email
                            </label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button className="inline-flex text-black hover:text-white bg-[#FFDDD2] border-0 py-2 px-6 focus:outline-none hover:bg-[#E29578] rounded text-lg">
                            Button
                        </button>
                    </div>  
                </div>


                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img
                        className="object-cover object-center rounded ml-[-60px] w-[700px] h-[350px]"
                        alt="hero"
                        src="https://i.pinimg.com/736x/1d/fe/0f/1dfe0f0f330ef4b5f234045d4d39b2c9.jpg"
                    />
                </div>
            </div>
        </section>


    )
}

export default Hero