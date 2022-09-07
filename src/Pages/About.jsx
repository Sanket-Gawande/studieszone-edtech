import React, { useEffect, useState } from 'react'

const About = () => {
  const userApi = "https://randomuser.me/api/?results=10";
  const [staff, setStaff] = useState([]);

  const getStaffs = async () => {
    const req = await fetch(userApi);
    const res = await req.json()
    setStaff(res?.results);
  }
  useEffect(() => {
    getStaffs();
  }, [])
  return (
    <section className='min-h-screen'>
      <div className='w-[90%]  max-w-[900px]  mt-8 mx-auto relative h-[40%] md:h-[250px] '>
        <div className='absolute inset-0 grid place-items-center bg-black/50 backdrop-filter backdrop-blur-sm'>
          <h4 className='text-center font-bold text-2xl text-white'>What we are ?</h4>
        </div>
        <img src="/about.jpg" alt="about us" className='mb-8 w-full h-[40%] md:h-[250px]  object-fill' />
      </div>
      <section className='w-[90%] max-w-[800px] py-6 mx-auto'>
        <h4 className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium.</h4>
        <p className='text-slate-700 text-md font-medium my-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur iusto facilis expedita reiciendis, quae debitis nemo aliquid, magni libero, voluptate placeat?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, provident? Deserunt incidunt, voluptatibus possimus dolorem obcaecati fugit ipsa qui quae at quam eius. Unde animi aliquam culpa alias eius ab, ipsam ipsum consequuntur odio.
        </p>
        <h4 className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium.</h4>
        <p className='text-slate-700 font-medium text-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim modi inventore quod perspiciatis quaerat illo, optio suscipit esse veritatis quos vel aut ipsa mollitia eos odio eaque quis beatae hic nobis. Laudantium.
        </p>
      </section>
      <div className="team w-[90%] w-[90%]  max-w-[900px]  mx-auto border-t-2 py-4">
        <h4 className='text-center font-semibold text-lg text-slate-700 '>Our team</h4>
        <section className='flex flex-wrap p-4 justify-center'>
          {
            staff?.map(obj =>
              <div key={obj.name.first} className='bg-slate-100 shadow-md m-4 p-4 w-[250px]'>
                <img src={obj?.picture?.large} alt="profile" className='w-[120px] h-[120px] block mx-auto my-2 rounded-full' />
                <h5 className='text-sm font-medium text-center'>{obj?.name.title}. {obj.name.first}  {obj.name.last}</h5>
                <p className='text-[8px] px-4 py-1 whitespace text-slate-600 w-full'>
                  <i className="fa fa-phone mr-2"></i>
                  {obj.phone}
                </p>
              </div>
            )
          }
          {
            staff.length === 0 &&
            <h2 className='text-center font-bold text-2xl text-slate-300'>Loading staff details...</h2>
          }
        </section>
      </div>
    </section>
  )
}

export default About