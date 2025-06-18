import React from 'react'
import Head from './small-componants/Head'
import Image from 'next/image'
import Starter from './small-componants/Starter'

function Stories_section() {

    const data = [{
        logo:"/logo.png",
        content:"To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
    Author_Name:"Floyd Miles",
    Author_CC:"Vice President, GoPro",
    } , {
        logo:"/logo2.png",
        content:"I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        Author_Name:"Jane Cooper",
        Author_CC:"CEO, Airbnb"
    } , {
        logo:"/logo3.png",
        content:"Landify saved our time in designing my company page.",
        Author_Name:"Kristin Watson",
        Author_CC:"Co-Founder, Strapi"
    }]

  return (
     <Starter parent='py-[100px] bg-[#D5FAFC] my-[40px]' container='relative '>
              
                  <Image src={"/mark.png"} alt='' className='absolute left-0 top-[-40px]' width={142} height={116} />
            <div className="window w-full h-full relative px-[100px] max-xl:px-0">
                <Head Title={{
                    content:"Real Stories from Real Customers",
                    className:"text-5xl w-1/2 leading-13 max-xl:w-full"
                }} p={{
                    content:"Get inspired by these stories.",
                    className:"text-xl mt-2"
                }} className='text-start items-start max-xl:mb-10' />
            </div>
           <div className="cont flex justify-center max-xl:w-full">
             <div className="cards grid grid-cols-2 gap-10 w-[70%] max-xl:w-fit items-center max-xl:grid-cols-1">
              {data.map((e , a:number) => (
                  <>
                 <div className={`card ${a === 0 ? "row-span-2 cols-span-1 "  :""} bg-white p-[35px] rounded-sm shadow-box`} key={a}>
                 <Image src={e.logo} alt='' className='' width={112} height={42} />
                <div className="p flex pl-10 gap-4 relative mt-6">
                                    <Image src={"/mark.png"} alt='' className='absolute w-9 h-7 left-[-10px] top-[-10px]' width={142} height={116} />
                                    <p>
{e.content}
                                    </p>
                </div>
                <div className="author pl-10 mt-7">
                    <h1 className='font-bold text-md'>{e.Author_Name}</h1>
                    <h2 className='text-gray-700 text-sm'>{e.Author_CC}</h2>
                </div>
               </div>
                </>
              ))}
            
            </div>
  </div>
              </Starter>
  )
}

export default Stories_section
