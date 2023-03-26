import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
function Navbar() {
    return (
        <header className=' text-white flex items-center justify-between px-8 lg:px-2 py-2'>
        <h1 className='nico font-bold lg:text-2xl text-white text-xl'>
          Save<p className='inline-block text-purple'>Vest</p>
        </h1>
        <nav className='hidden lg:flex'>
          <ul className='flex '>
            <li className='mx-3'>
              Home
            </li>
            <li className='mx-3'> 
              About Us
            </li>
            <li className='mx-3'>
              FAQS
            </li>
            <li className='mx-3'>
              Learn
            </li>
            <li className='mx-3'>
              Contact Us
            </li>
          </ul>
          
        </nav>
        <div className='hidden lg:flex space-between'>
          <div>
            <button className=' border-2 border-white px-10 py-[6px] rounded-full'>
              Login
            </button>
          </div>
          <div>
            <button className='border-2 border-purple bg-purple ml-2 px-6 py-[6px] rounded-full'>
              Sign Up For Free
            </button>
          </div>
        </div>
        <div className='lg:hidden'>
          <button className='text-xl'>
           <AiOutlineMenu/>
          </button>
        </div>
      </header>
    )
}

export default Navbar
