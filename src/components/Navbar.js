import React, { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className=" w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg ">
      <div className=" px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className=" hidden md:flex">
          <li><Link activeClass="active" to="home" spy={true} smooth={true}  duration={500} ><button className="bg-zinc-200 text-black border-none">Home</button></Link></li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500} ><button className="bg-zinc-200 text-black border-none">About</button></Link></li>
          <li><Link activeClass="active" to="support" spy={true} smooth={true} offset={-50} duration={500} ><button className="bg-zinc-200 text-black border-none">Support</button></Link></li>
          <li><Link activeClass="active" to="platforms" spy={true} smooth={true} offset={-100} duration={500} ><button className="bg-zinc-200 text-black border-none">Platforms</button></Link></li>
          <li><Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={500} ><button className="bg-zinc-200 text-black border-none">Pricing</button></Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black">
            Login
          </button>
          <button className="hover:px-4 m-4">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          )}
        </div>
      </div>
      <ul className={!nav?"hidden":"md:hidden absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true}  duration={500} >Home</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500} >About</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="support" spy={true} smooth={true} offset={-50} duration={500} >Support</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="platforms" spy={true} smooth={true} offset={-100} duration={500} >Platforms</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="pricing" spy={true} smooth={true} offset={-50} duration={500} >Pricing</Link></li>
        <div className="flex flex-col">
          <button className="bg-transparent mt-4 text-indigo-600">Login</button>
          <button className="hover:px-4 my-4">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}
