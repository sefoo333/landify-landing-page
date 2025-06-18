import React from 'react'
import Starter from './small-componants/Starter'
import Image from 'next/image'
import Head from './small-componants/Head'

function CFA() {
  return (
<Starter parent='bg-[#1DB5BE] max-xl:pb-0 max-xl:pt-[50px]'>
<div className="flex justify-between gap-15 items-center max-xl:flex-col">
<div className="text py-[50px] pb-0">
     <Head Title={{
    content:"Manage all projects from your mobile",
                    className:"text-6xl leading-17 max-xl:text-5xl max-xl:leading-14"
}} p={{
    content:"Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!",
className:"text-xl mt-4 text-start leading-9"
}} className='text-start items-start' />

<div className="Get_app mt-10">
    <h1 className='font-medium mb-3 text-xl'>Get The App</h1>
    <div className="stores">
<Image src={"/Badges.png"} alt='' width={282} height={40} />
    </div>
</div>
</div>
<Image src={"/CFA_image.png"} alt='' width={592} height={550} />
</div>
</Starter>
  )
}

export default CFA
