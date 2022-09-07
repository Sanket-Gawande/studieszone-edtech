import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../Components/CourseCard'
import ReviewsCard from '../Components/ReviewsCard';
import { courses } from "../assets/CourseData"
const Home = () => {
  const [courses, setCourses] = useState([])
  const getCourses = async () => {
    const req = await fetch(`${import.meta.env.VITE_SERVER_API}/courses/all/6`);
    const res = await req.json();
    setCourses(res?.courses);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getCourses()
  }, [])
  const reviews = [
    {
      name: "Rakesh Roy",
      picture: "https://randomuser.me/api/portraits/men/98.jpg",
      stars: 4,
      date: "22-Aug-2022",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus? Modi t nisi eum."
    },
    {
      name: "Nirav Modi",
      stars: 5,
      date: "14-Aug-2022",
      picture: "https://randomuser.me/api/portraits/men/44.jpg",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus? Modi t nisi eum."
    },
    {
      name: "Greta Berg",
      stars: 3,
      picture: "https://randomuser.me/api/portraits/women/9.jpg",
      date: "21-May-2022",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus? Modi t nisi eum."
    },

  ]
  return (
    <section className='bg-gray-50 min-h-screen w-full'>

      <div className='md:w-[90%] mx-auto flex items-center justify-center flex-wrap p-4'>
        {/* content */}
        <div className='w-[90%] md:w-[50%] order-2 md:order-1'>
          <h1 className=' text-2xl md:text-5xl text-slate-800 font-bold'>Never stop learning , stay connected with world of knowledge - <span className='text-transparent bg-clip-text button '>studieszone</span></h1>
          <p className='my-6 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur fugit enim, deserunt veniam laborios</p>
          <Link className="py-3 block my-2 w-max button px-5" to="courses"> Explore courses</Link>
        </div>
        {/* hero image */}
        <img src="/hero.webp" alt="edtech" className='w-[90%] md:w-[50%] order-1 md:order-2' />
      </div>

      {/* services section */}
      <section className='w-full border-t border-b mx-auto py-12 bg-slate-200'>
        <h4 className='text-center font-semibold text-xl py-4 '>Services we provide</h4>
        <div className='flex items-center justify-center flex-wrap'>
          {

            ["Live classes", "Dedicted mentor", "Dought sessions", "Weekly tests", "Placement preparation"].map(item =>
              <span key={item} className='py-2 rounded-md px-4 cursor-pointer hover:bg-green hover:text-white transition-all bg-white shadow-xl text-slate-700 mx-4 my-2'>{item}</span>
            )
          }

        </div>
      </section>
      {/* popular courses section */}
      <section className='py-6 bg-gray-100'>
        <h4 className='py-2 px-6 w-max rounded-2xl  bg-green/30 mx-auto text-xl font-semibold'>Popular course</h4>
        <section className='w-[90%] mx-auto flex items-center flex-wrap justify-center my-4'>
          {
            courses.map((obj, index) =>
              <CourseCard obj={obj} key={index} />
            )
          }

        </section>
        <Link to={"/courses"} className="py-3 px-8 block w-max mx-auto button font-semibold">All courses <i className="fa fa-chevron-right"></i> </Link>
      </section>
      <hr />
      {/* people review section */}
      <section className='py-8'>
        <h4 className='py-2 px-6 w-max rounded-2xl  bg-green/30 mx-auto text-xl font-semibold'>What people says</h4>
        <section className='w-[90%] mx-auto flex items-center overflow-auto my-4'>
          {
            reviews.map((review, index) =>
              <ReviewsCard key={index} review={review} />)
          }
        </section>

      </section>


    </section>
  )
}

export default Home