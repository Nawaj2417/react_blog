import React from 'react'
import Blogcardimg from './Blogcardimg'
import Blogcarddetail from './Blogcarddetail'
import { Link } from 'react-router-dom'

const Blogcard = () => {
  return (
<Link to="/blogdetail/firstblog">
    <div className="py-8 flex flex-wrap md:flex-nowrap gap-10 shadow-xl  px-4 rounded-md">
<Blogcardimg />
<Blogcarddetail />
  </div>
</Link>
  )
}

export default Blogcard