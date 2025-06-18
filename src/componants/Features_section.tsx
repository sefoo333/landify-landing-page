import React from 'react'
import Head from './small-componants/Head'
import Feature from './small-componants/Feature'
import Starter from './small-componants/Starter'

function Features_section() {


    const data = [{
        icon:"/icons/icon1.png",
        content:"Robust workflow",
        p:""
    } , {
        icon:"/icons/icon2.png",
        content:"Flexibility",
        p:""
    } , {
        icon:"/icons/icon4.png",
        content:"User friendly",
        p:''
    } , {
        icon:"/icons/icon5.png",
        content:"Multiple layouts",
        p:""
    } , {
        icon:"/icons/icon6.png",
        content:"Better components",
        p:""
    }, {
        icon:"/icons/icon7.png",
        content:"Well organised",
        p:""
    }]

  return (
<Starter>            
    <div className="window ">
        <Head Title={{
            content:'Tailor-made features',
            className:"text-5xl max-xl:text-4xl font-bold"
        }} p={{
            content:"Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.",
            className:"mt-4 w-1/2 max-xl:w-full"
        }} className='text-center' />
        <div className="features grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 mt-10 gap-25  max-xl:p-0">
{data.map((e,a) => (
    <Feature key={a} icon={e.icon} Title={e.content} />
))}
        </div>
    </div>
</Starter>
  )
}

export default Features_section
