import React from "react";
import supportImg from "../assets/support.jpg";
import {ChipIcon, SupportIcon, PhoneIcon} from '@heroicons/react/outline'

export default function Support() {
  return (
    <div name="support" className="w-full  mt-24">
      <div className="w-full h-[760px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="support"
        />
      </div>
      <div className="max-w-[1240] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold text-center py-6">
            Finding the right team
          </h3>
          <p className="text-3xl py-4 text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {/* 1 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-2xl mt-[-4rem] "/>
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repudiandae veritatis ratione error tenetur, voluptates
                architecto possimus ad! Omnis minima ea quidem quisquam unde
                beatae, minus illo et cum vel?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-end text-indigo-600">
                Contact Us{" "}
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-2xl mt-[-4rem] "/>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repudiandae veritatis ratione error tenetur, voluptates
                architecto possimus ad! Omnis minima ea quidem quisquam unde
                beatae, minus illo et cum vel?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-end text-indigo-600">
                Contact Us{" "}
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-2xl mt-[-4rem] "/>
              <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                repudiandae veritatis ratione error tenetur, voluptates
                architecto possimus ad! Omnis minima ea quidem quisquam unde
                beatae, minus illo et cum vel?
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-end text-indigo-600">
                Contact Us {" "}
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
