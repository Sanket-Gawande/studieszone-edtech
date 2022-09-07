import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({obj}) => {
  return (
      <div  className='shadow-sm relative rounded-lg transition-all overflow-hidden group hover:shadow-lg hover:bg-stone-50  p-4 px-6 mx-2 my-2 w-[300px] bg-white '>
        <span className='absolute rotate-45 top-8 -right-10 text-center bg-green  text-xs px-4 py-1 text-white w-[180px]'>{obj.category}</span>
          <img src={obj.icon} className="w-16 h-16" alt="" />
          <h4 className='text-green   my-3 font-semibold'>{obj.name}</h4>
          <p className='text-slate-600  py-2 text-sm font-medium'> {obj.title}</p>

          <div className='flex py-2 items-center space-x-4'>

              <p> <i className="fa fa-video mr-1 text-green"></i> {obj.content}</p>
              <p> <i className="fa fa-eye mr-1 text-green"></i> {obj.views}</p>
          </div>
          <hr />
          <Link className='bg-slate-200 group-hover:bg-green py-2 px-5 mt-4 block w-max text-sm  mx-auto ' to={`/course/${obj.slug}`}>Know more <i className="fa fa-chevron-right"></i> </Link>
      </div>
  )
}

export default CourseCard