import React from 'react'

const ReviewsCard = ({review}) => {
  return (
      <div className='bg-white shrink-0 p-2 overflow-hidden border hover:shadow-md mx-4 my-4 w-[420px] h-[200px] flex items-center'>
          <img src={review.picture} className='w-[40%] h-full rounded-md object-cover' alt="" />
          <div className='flex-1 h-full px-4 py-2'>
              <span className='space-x-1 text-sm text-yellow-500'>
               {
                [1,2,3,4,5].map(item => 
                    <i  key={item}  className={`fa fa-star mx-1 ${review.stars >= item ? "text-yellow-500" : "text-slate-500"}`}></i>
                    )
               }
              </span>
              <h4 className='font-medium py-2 '>{review.name}</h4>
              <p className='text-xs'>{review.review}</p>
              <p className='text-[8px] font-sans text-right text-slate-400 mt-4'>{review.date}</p>
          </div>
      </div>
  )
}

export default ReviewsCard