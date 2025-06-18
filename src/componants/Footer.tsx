import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
    <Image src={"/web_logo.png"} alt='' width={128} height={90} />
      

      <p className="mt-4 text-center text-sm text-gray-600 lg:mt-0 lg:text-right">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer
