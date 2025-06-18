import React from 'react'
import Starter from './small-componants/Starter'
import Head from './small-componants/Head'
import Image from 'next/image'

function Apps_section() {
  return (
   <Starter parent='py-[100px]'>
   <div className="window flex items-center justify-between gap-50 max-md:flex-col max-xl:gap-20">
     <Head Title={{
    content:"Easy integrations with 170+ tools",
                    className:"text-6xl max-xl:text-5xl leading-19 max-xl:leading-14 max-xl:text-5xl"
}} p={{
    content:"Connect Landify with your favourite tools that you use daily and keep things on track.",
className:"text-xl mt-4  text-start"
}} className='text-start  items-start' />

<div className="apps basis-[80%] max-md:basis-full flex items-center justify-center h-[300px] bg-purple-300/50 rounded-bl-full rounded-br-full">
<Image src={"/apps.png"} alt='' width={488} height={232} />
</div>
   </div>
   </Starter>
  )
}

export default Apps_section
