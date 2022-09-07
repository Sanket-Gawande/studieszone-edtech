import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  ContextProvider from '../context/ContextProvider';

const CourseDetails = () => {
  const { courses = [] } = useContext(ContextProvider) || [];
  const { course } = useParams();
  const courseDetail = courses.filter(obj => obj.slug === course)[0];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const coreFeatures = [
    {
      icon: "/online-learning.png",
      title: "Online learning",
      desc: "Learn anytime , anywhere"
    },
    {
      icon: "/doubt.png",
      title: "Doubt solving",
      desc: "one-o-one doubt session"
    },
    {
      icon: "/beginner.png",
      title: "Beginner friendly",
      desc: "No prerequisite to start"
    },
    {
      icon: "/project.png",
      title: "One final project",
      desc: "Complete guide to apply knowledge"
    },
    {
      icon: "/certificate.png",
      title: "Course certificate",
      desc: "Course completion certificate from studieszone"
    },
    {
      icon: "/video.png",
      title: "Downloadable content",
      desc: "Accessible for lifetime"
    }
  ];


  const headingStyle = "text-xl font-semibold text-green py-2"
  return (
    <div className='min-h-screen' >
      <section className='w-[90%] max-w-[900px] mx-auto my-8 '>
        <div className="relative w-full  h-[250px]">

          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/1649279368-Ent-2022Python.jpeg"
            alt={course}
            className="w-full object-cover h-[250px]"
          />
          {/*  contetnt */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm backdrop-filter grid place-items-center text-center">
            <span>

              <h2 className='text-2xl text-white font-bold'>{courseDetail?.name}</h2>
              <p className='text-slate-300 p-4'>
                {courseDetail?.title}
              </p>
            </span>
          </div>
        </div>
        {/* course highlights */}
        <div className='my-4'>
          <h4 className={`${headingStyle}`}> Core features</h4>
          <div className="flex justify-center items-center p-4 flex-wrap">
            {
              coreFeatures.map(({ icon, title, desc }, index) =>
                <div className='border flex space-x-4 border-slate-300 p-4 m-4 md:w-[40%] rounded-md items-center bg-stone-100'
                  key={index}>
                  <img src={`/icons/${icon}`} alt={title} className="w-10 h-10" />
                  <div className='p-2'>
                    <h4 className='text-sm font-semibold'>{title}</h4>
                    <p className='text-xs'>{desc}</p>
                  </div>
                </div>
              )
            }
          </div>

        </div>
        {/* course features */}
        <div className='my-4'>
          <h4 className={`${headingStyle}`}> Course features</h4>
          <ul className="p-4 px-6 border-b">
            {
              courseDetail?.features?.map(item =>
                <li key={item} className='py-2 text-slate-800 text-sm list-disc'>{item}</li>
              )

            }
          </ul>
        </div>
        {/* enroll now */}
        <div className="flex justify-between items-center px-4 py-4">
          <h4 className={headingStyle}>Enroll now</h4>
          <section>
            <p>
              Fees
              ${courseDetail?.price}/-
            </p>
            <a href="#" className='py-2 px-4 bg-green text-white block w-max'> Proceed</a>
          </section>
        </div>
      </section>
    </div>
  )
}

export default CourseDetails