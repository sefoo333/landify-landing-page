import { Button } from '@/components/ui/button'
import { CirclePlay } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
 <div className="parent flex flex-col justify-center relative items-center">
              <Image src={"/Background.png"} alt='' width={1440} className='absolute h-full max-md:h-[80%]' height={866}  style={{
                   backgroundSize:"cover",
                   width:"100%",
                   zIndex:"-1",
                   backgroundPosition:"center",
                   backgroundRepeat:"no-repeat",
                   top:"0px"
               }} />
            <div className="container w-[80rem]  max-md:w-[15rem] flex-col flex justify-center">    
            
              <div className="flex justify-between items-center py-15 max-xl:flex-col max-xl:gap-15 ">
                  <div className="content flex flex-col basis-[50%] max-xl:basis-full gap-6 ">
                    <div className="text max-xl:w-fit">
                    <h1 className='font-bold text-6xl max-xl:text-5xl mb-5'>The easiest way to manage projects</h1>
                    <p>From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.</p>
                    </div>
                <div className="buttons flex gap-5">
                    <Button className="text-white bg-primaryButton py-6 text-md hover:bg-purple-700" size={"lg"}>Get Started</Button>
                    <Button variant={"ghost"} size={"lg"} className='text-md text-primaryButton py-6 hover:bg-transparent hover:text-purple-600'><CirclePlay /> Watch Video</Button>
                </div>
                </div>
            <div className="image  flex justify-center">
                <Image src={"/Mobile.png"} className='' width={362} height={712} alt='' />
     </div>
              </div>
              </div>
              </div>
        
  )
}

export default Hero
