import React from 'react'

const BlogdetailImage = ({blogimage}) => {
  console.log(blogimage)
  return (
    <div className='w-[80%] h-[600px]'>
      {/* css change */}
      <img src={`${blogimage}`} className='w-full h-full object-cover object-center'/>
    </div>
  )
}

export default BlogdetailImage
