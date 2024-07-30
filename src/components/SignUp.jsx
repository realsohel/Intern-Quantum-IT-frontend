import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {
    return (
        <div className=' w-full px-4 py-6 z-50 bg-blue-400 fixed'>
            <div className='max-w-[450px] my-4 h-[500px] mx-auto bg-black/75 text-white rounded-lg  '>
                <div className='mt-6  items-center  pt-10'>
                    <div className=' w-[450px] text-2xl font-semibold   my-4  mx-auto absolute top-1'>
                    <h2 className='text-center w-1/2 mx-auto p-4  tracking-widest bg-blue-300 text-black'>
                        SIGN UP
                    </h2>

                    </div>
                    {/* <img src={avatar}  className="mx-auto h-32 w-32 items-center " alt="" /> */}
                    <form
                    // onSubmit={handleSubmit}
                    className='w-full flex flex-col pt-4'
                    >   
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <span className=''>
                            <RxAvatar size={40} className='mx-2'/> 
                        </span>
                        <input
                    // onChange={(e) => setEmail(e.target.value)}
                            className='  mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none'
                            type='text'
                            placeholder='Name'
                            autoComplete='username'
                            required
                    />
                    </div>

                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <span className=''>
                            <SlCalender size={40} className='mx-2'/> 
                            
                        </span>
                        <DatePicker
                    // onChange={(e) => setEmail(e.target.value)}
                            className='my-2 mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none'
                            
                            placeholderText='Date Of Birth'
                            // selected={date}
                            dateFormat="dd/MM/yyyy"
                            maxDate={new Date()}
                            required
                        />
                    </div>
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none '>
                        <span className=''>
                            <MdEmail size={40} className='mx-2'/> 
                            
                        </span>
                        <input
                    // onChange={(e) => setEmail(e.target.value)}
                    className=' mx-8 text-lg  tracking-wider bg-gray-700 focus:outline-none'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    required
                    />
                    </div>
                    
                    
                    <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none  '>
                        <RiLockPasswordFill size={40} className='mx-2'/> 
                        <input
                    // onChange={(e) => setEmail(e.target.value)}
                        className=' mx-8 text-lg bg-gray-700 focus:outline-none'
                        type='password'
                        placeholder='Password'
                        autoComplete='password'
                        required
                    />
                    </div>
                    <button className=' bg-blue-300 mx-14 rounded-md py-3 my-4  font-bold'>
                        Sign Up
                    </button>
                    <div className='mx-14 rounded-md flex justify-between items-center text-sm text-gray-600'>
                    <p>
                        <input className='mr-2' type='checkbox' />
                        Remember me
                    </p>
                    <p>Need Help?</p>
                    </div>
                    <p className='pt-3 text-center'>
                    <span className='text-gray-600 '>
                        Do not have an account ?
                    </span>{' '}
                    <span className='text-blue-300 hover:underline'>
                        <Link to='/login'>Login</Link>
                    </span>
                    </p>
                </form>
                    
                </div>

            </div>

            <div className='max-w-[300px] my-4 h-[20px] mx-auto  bg-black/50 shadow-lg blur-md px-32' >

            </div>
        </div>
    )
}

export default SignUp
