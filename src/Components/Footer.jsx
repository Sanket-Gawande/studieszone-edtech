import React from 'react'

const Footer = () => {
  return (
    <footer className='sticky top-full bottom-0 p-4 bg-slate-800 border-t-[6px] border-green'>
      <div className='w-[90%] flex flex-col md:flex-row mx-auto'>
        {/* about section */}
        <section className='w-[50%]'>
          <img src="/logo.png" alt="logo" className='w-36' />
          <small className='px-2 tracking-[2.5px] text-white'>stay connected</small>
          <div className="about-us px-2 py-4">

            <h4 className="text-green font-semibold text-md">About us</h4>
            <p className='text-gray-300 text-sm  max-w-[400px]'>We wants to keep peoples connected with live stream of knowledge , no matter what the constraint is .</p>
            <h4 className="text-green font-semibold text-md mt-4">Contact us</h4>
            <p className='text-gray-300 text-sm  max-w-[400px'> <i className="fa fa-phone text-slate-400 mr-2"></i>+91 80000 90000 </p>
            <p className='text-gray-300 text-sm  max-w-[400px'> <i className="fa fa-envelope text-slate-400 mr-2"></i>info@studieszone.com</p>

          </div>
        </section>
        {/*  important internal links */}
        <section className='flex-1 py-4 justify-around  flex space-x-6'>

          <ul className='text-white'>
            <h4 className='text-md font-semibold'>Important Links (internal)</h4>
            {
              ["Home", "About", "Courses"].map(item =>
                <li key={item} className="my-2 text-slate-400"> {item}</li>
              )
            }
          </ul>
          <ul className='text-white'>
            <h4 className='text-md font-semibold'>Important Links (external)</h4>
            {
              ["Home", "About", "Courses"].map(item =>
                <li key={item} className="text-slate-400  my-2"> {item}</li>
              )
            }
          </ul>
        </section>
        <hr />

      </div>
      
      <section className='flex w-[90%] py-4 border-t border-slate-500 my-4 mx-auto text-slate-300 justify-between flex-wrap'>

        <div className='flex text-sky-400 text-lg self-center justify-center items-center space-x-4'>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-reddit"></i>
          <i className="fa-brands fa-slack"></i>

        </div>
        <p>&copy; All rights are reserved 2022-2023</p>
      </section>
      <p className='text-sm font-medium text-center text-white'>Designed by <a target="blank" className='underline text-blue-400' href="https://www.github.com/Sanket-Gawande"> Sanket-Gawande</a> with <i className="fa-brands fa-react text-sky-500 mr-1"></i> , <i className="fa-brands fa-css3-alt text-sky-500 mr-1"></i> and  <i className="fa mx-1 fa-heart text-rose-500"></i> </p>
    </footer>
  )
}

export default Footer