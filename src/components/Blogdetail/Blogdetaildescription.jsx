import React from 'react'
import parse from "html-react-parser"
const Blogdetaildescription = ({discriptions="hello"}) => {
  const content = parse(discriptions)
  return (
   
    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
   

   {content}

  </div>
  )
}

export default Blogdetaildescription
