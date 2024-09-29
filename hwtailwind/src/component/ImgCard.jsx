import React from 'react'

function ImgCard({ img, title, text }) {
    return (
        <>
            <div className='flex justify-start items-start gap-6 w-full max-sm:flex-col max-sm:gap-0'>
                <div className='w-[27%] max-sm:w-[35%]'>
                    <img src={img}
                    alt='video' />
                </div>
                <div className='flex flex-col items-start justify-start gap-2 w-[73%] max-sm:w-[100%]'>
                    <h3 className='font-semibold font-montserrat text-lg max-sm:text-xl max-sm:w-full'>{title}</h3>
                    <p className='text-[#707c84] font-montserrat'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default ImgCard