import React from 'react'
import {FaFacebook, FaTwitter, FaGithub, FaTwitch, FaInstagram} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full bg-slate-900 text-gray-300 mt-24 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>

            <div className='my-3'>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            

            <div className='my-3'>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div className='my-3'>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div className='my-3'>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
              <p className='font-bold uppercase'>Subscribe to or newsletter</p>
              <p className='py-4'>The latest news, articles and resources sent to your inbox weekly.</p>
              <form className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 rounded mb-4' type='email' placeholder='Enter your email'/>
                <button className='p-2 mb-4'>Subscribe</button>
              </form>

            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between text-center text-gray-500 sm:flex-row'>
          <p className='py-3'>2022 workflow, LLC. All rights reserved</p>
          <div className='flex justify-between sm:w-[300px] pt-3 text-2xl'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaGithub/>
            <FaTwitch/>
          </div>
        </div>

    </div>
  )
}
