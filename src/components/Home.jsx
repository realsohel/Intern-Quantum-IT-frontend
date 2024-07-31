import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-full px-4 py-20 fixed z-50 bg-blue-400 fixe text-center text-blue-950'>
            
            <h2 className='text-4xl font-medium  my-12'> Welcome to Quantum IT Innovations !!</h2>
            <p className='text-lg font-medium items-start text-start'>
                Hello Myself Mohd Sohel Salmani, An Entry-level, Indian based full-stack web developer with 1.5 years of experience in MERN stack. I am
committed to building excellent websites that improve the lives of those around me.
I am a person who’s always learning, passionate about exploring technology and tools to help me
enhance my daily life.
I work well in a team and support my team members in places I can assist. I have worked on multiple
projects in various fields both as part of a team and by myself. I have solved more than <span className='font-bold'>250 questions on Leetcode</span> and have a 
<span className='font-bold'>{" "}5 star ranking on HackerRank.</span> {" "} Here is the assignment I've solved...

            </p>

            <div className='flex w-1/2 mx-auto justify-center py-8 space-x-12 text-lg font-medium'>
                <Link to="/register" className='border p-4 rounded-md border-blue-950 bg-blue-900 text-white hover:bg-blue-950'>
                    SignUp
                </Link>
                <Link to="/login" className='border p-4 rounded-md border-blue-950 bg-blue-900 text-white hover:bg-blue-950'>
                    Login
                </Link>
            </div>

            <div className='max-w-[300px] my-2 h-[10px] mx-auto  bg-black/50 shadow-lg blur-md px-32' ></div>
        </div>
    )
}

export default Home
