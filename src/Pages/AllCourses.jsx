import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import CourseCard from '../Components/CourseCard'
import ContextProvider from '../context/ContextProvider'

const AllCourses = () => {

  const { courses = [] } = useContext(ContextProvider);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [category, setCategory] = useState("All")
  return (
    <section className='py-8 bg-gray-100'>

      <h4 className='py-2 px-6 w-max rounded-2xl  bg-green/30 mx-auto text-xl font-semibold'>All  courses</h4>
      {/*  sorting sections */}
      <section>
        <h4 className='text-center text-sm mt-5 font-medium text-slate-500'>Sort by categories</h4>
        <div className='flex flex-wrap max-w-[800px] w-[90%] justify-center mx-auto'>
          {

            ["All", "Frontend", "Backend", "Data science", "Machine learning", "Communication"].map(item =>
              <span key={item} onClick={() => setCategory(item)} className={`cursor-pointer m-2 text-xs  text-white py-2 px-4 ${category.toLowerCase() == item.toLowerCase() ? "bg-green" : "bg-slate-500"}`}>{item}</span>
            )
          }
        </div>
      </section>
      {
        courses.length === 0 &&
        <h2 className='text-center font-bold text-2xl text-slate-300'>Loading courses details...</h2>
      }
      <section className='w-[90%] mx-auto flex items-center flex-wrap justify-center mb-10 mt-4'>
        {
          courses?.filter(obj => category === "All" ? true : obj.category.toLowerCase() === category.toLowerCase())?.map((obj, index) =>
            <CourseCard obj={obj} key={index} />
          )
        }
        {
          courses?.filter(obj => category === "All" ? true : obj.category.toLowerCase() === category.toLowerCase()).length === 0 &&
          <div className='w-[90%] max-w-[500px] mx-auto my-4 p-4'>
            <img src="/no-data.svg" alt="no data" />
          </div>
        }

      </section>

    </section>
  )
}

export default AllCourses