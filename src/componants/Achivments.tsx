import React from 'react'
import Starter from './small-componants/Starter'
import Head from './small-componants/Head'
import Image from 'next/image'

function Achivments() {
  return (
<Starter>
    <div className="flex justify-between gap-20 py-[50px] max-xl:flex-col">
<Head Title={{
    content:"Our 18 years of achievements",
                    className:"text-6xl leading-19 max-xl:text-5xl max-xl:leading-17"
}} p={{
    content:"With our super powers we have reached this",
className:"text-xl mt-4"
}} className='text-start items-start' />

<div className="achivments grid grid-cols-2 max-md:grid-cols-1 gap-15">
    <div className="ach flex gap-6 items-center">
<Image src={"/icons/icon1.png"} alt='' width={32} height={32} />
<div className="text-start">
    <h1 className='font-bold text-4xl '>10,000+</h1>
    <h2 className='text-start'>Downloads per day</h2>
</div>
    </div>
    <div className="ach flex gap-6 items-center">
<Image src={"/icons/icon2.png"} alt='' width={32} height={32} />
<div className="text-start text-nowrap">
    <h1 className='font-bold text-4xl'>2 Million</h1>
    <h2 className='text-start'>Users</h2>
</div>
    </div>
    <div className="ach flex gap-6 items-center">
<Image src={"/icons/icon4.png"} alt='' width={32} height={32} />
<div className="text-start">
    <h1 className='font-bold text-4xl'>500+</h1>
    <h2 className='text-start'>Clients</h2>
</div>
    </div>
    <div className="ach flex gap-6 items-center">
<Image src={"/icons/icon5.png"} alt='' width={32} height={32} />
<div className="text-start">
    <h1 className='font-bold text-4xl'>140</h1>
    <h2 className='text-start'>Countes</h2>
</div>
    </div>
 
</div>
    </div>
</Starter>
  )
}

export default Achivments
