import React from 'react'

function Starter({children , width = "80rem" , parent , container}:{children:React.ReactNode , width?:string , parent?:string , container?:string}) {
  return (
     <div className={"parent flex flex-col py-[70px] justify-center relative items-center " + parent}>
            <div className={`container px-[20px] max-xl:px-[10px] w-[${width}] max-md:w-[20rem] max-xl:w-[50rem]  flex-col flex justify-center ${container} `}>    
{children}
            </div>
            </div>
  )
}

export default Starter
