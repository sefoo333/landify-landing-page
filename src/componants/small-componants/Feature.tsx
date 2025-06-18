import React from 'react'
import Head from './Head'
import Image from 'next/image'
interface FeatureType {
icon?:string,
Title?:string,
}

function Feature({icon , Title}:FeatureType) {
  return (
    <div className="feature flex flex-col items-center">
        <div className="icon"><Image src={`${icon}`} alt='' width={30} height={30} /></div>
         <Head Title={{
            content:`${Title}`,
            className:"text-3xl"
        }} p={{
content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            className:"mt-3"
        }} className='text-center mt-3' />

    </div>
  )
}

export default Feature
