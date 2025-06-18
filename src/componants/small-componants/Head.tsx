import React from 'react'

interface HeadType {
className:string,
Title:{content:string,className?:string},
p:{content:string,className?:string},
}

function Head({className,Title,p}:HeadType) {
  return (
<div className={"text flex justify-center flex-col items-center " + className}>
    <h1 className={'font-bold ' + Title.className}>{Title.content}</h1>
    <p className={' text-center ' + p.className}>{p.content}</p>
</div>
  )
}

export default Head
