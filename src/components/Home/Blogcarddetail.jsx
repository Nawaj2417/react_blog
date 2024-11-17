import React from 'react'
import { Link } from 'react-router-dom'

const Blogcarddetail = ({data}) => {
  return (
    <div className="md:flex-grow">
    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
    <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
    {/* <p className="text-indigo-500 inline-flex items-center mt-4">Learn More
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </p> */}
    <div className="btn flex gap-4 px-4 py-2">
    {/* /updateblog/${data.slug}_${data.id}` */}
          <Link to={""}>  
         <button className='py-1 px-4 bg-green-600 text-lg rounded-xl text-white' >edit</button>
         </Link>
          <button className='py-1 px-4 bg-red-600 text-lg rounded-xl text-white'  >delete</button>
        </div>
  </div>
  )
}

export default Blogcarddetail