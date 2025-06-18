"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function Navbar() {

  const [toggle , setToggle] = useState(false);

  return (
<header className="bg-white">
  <div className="mx-auto flex h-23 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 relative">
    <Image src={"/web_logo.png"} alt='' width={128} height={90} />

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className={`transition md:block ${!toggle ? "opacity-0" : "opacity-100"} max-xl:absolute max-xl:top-[91px] max-xl:w-full max-xl:left-0 max-xl:p-[20px] max-xl:z-9 max-xl:bg-white`}>
        <ul className="flex items-center max-xl:items-start max-xl:flex-col gap-6 text-sm font-semibold">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Features </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Pricing </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Help </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
      <Image className='cursor-pointer max-md:hidden' src={"/Badges.png"} alt='' width={282} height={82} />
        <button
          className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
          onClick={() => setToggle((e) => !e)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar
