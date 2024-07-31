import React, { useEffect, useState } from 'react'
import avatar from "/images/avatar.png"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
    
    const {isauthenticated, setIsauthenticated,user,setUser} = useAuthContext();
    const[formData,setFormData] = useState({
        email:"",
        password:""
    })

    const {email,password} = formData;
    const navigate = useNavigate();

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(`${BASE_URL}/login`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const { success, token, message } = res.data;

            if (success) {
                setIsauthenticated(true);
                toast.success(message);
                setUser(token);
                localStorage.setItem('token', token);
            } else {
                
                toast.error(res.response.data.message);
            }
            
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
            setIsauthenticated(false);
        }
    }

    useEffect(() => {
        if (user && isauthenticated) {
            navigate('/user/protected/route');
        }
    }, [user,isauthenticated, navigate]);
    return (
        <div className=' w-full px-4 py-6 z-50 bg-blue-400 fixed'>
            <div className='max-w-[450px] my-4 h-[500px] mx-auto bg-black/75 text-white rounded-lg  '>
                <div className='mt-6  items-center  pt-12'>
                    <div className=' w-[450px] text-2xl font-semibold   my-4  mx-auto absolute top-1'>
                        <h2 className='text-center w-1/2 mx-auto p-4  tracking-widest bg-blue-300 text-black'>
                            LOGIN
                        </h2>
                    </div>

                    <img src={avatar}  className="mx-auto h-32 w-32 items-center " alt="" />

                    <form onSubmit={handleSubmit} className='w-full flex flex-col pt-4' >   
                        <div className='flex  mx-auto rounded-md p-2 my-2 bg-gray-700 focus:outline-none '>
                            <span className=''>
                                <MdEmail size={40} className='mx-2'/> 
                            </span>
                            <input
                                onChange={handleInputChange}
                                name='email'
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
                                className=' mx-8 text-lg bg-gray-700 focus:outline-none'
                                onChange={handleInputChange}
                                name='password'
                                type='password'
                                placeholder='Password'
                                autoComplete='password'
                                required
                            />
                        </div>
                        <button className=' bg-blue-300 mx-14 rounded-md py-3 my-4  font-bold'>
                            Login
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
                                <Link to='/register'> Sign Up</Link>
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

export default Login
