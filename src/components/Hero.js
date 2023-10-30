import React from 'react'
import cyberImg from "../assets/cyber.png"


export default function Hero() {
  return (
    <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className=' flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
              <img className='w-full' src={cyberImg} alt='cyber cloud'/>
            </div>
            <div className=' absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
              <p className='text-3xl font-bold'>Data Services</p>
              <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'>
                  <svg className='text-idigo-500' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-80q-140-35-230-162.5T160-522v-238l320-120 320 120v238q0 152-90 279.5T480-80Zm0-62q106-35 175.5-128.5T737-480H480v-335l-260 97v196q0 12 .5 20.5T223-480h257v338Z"/></svg>
                  App Security</p>

                <p className='flex px-4 py-2 text-slate-500'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M80-130v-60h800v60H80Zm40-120v-270h100v270H120Zm206 0v-470h100v470H326Zm207 0v-350h100v350H533Zm207 0v-590h100v590H740Z"/></svg>
                  Dashboard Design</p>

                <p className='flex px-4 py-2 text-slate-500'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q20-97 94-158.5T482-799q112 0 189 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267-522h-19q-62 0-105 43.5T100-371q0 63 44 107t107 44Zm229-260Z"/></svg>
                  Cloud Data</p>

                <p className='flex px-4 py-2 text-slate-500'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-375 375-480l105-105 105 105-105 105Zm-85-294-83-83 168-168 168 168-83 83-85-85-85 85ZM208-312 40-480l168-168 83 83-85 85 85 85-83 83Zm544 0-83-83 85-85-85-85 83-83 168 168-168 168ZM480-40 312-208l83-83 85 85 85-85 83 83L480-40Z"/></svg>
                  API</p>

              </div>
            </div>
        </div>
    </div>
  )

}
