import React from 'react'

function LastCard({ img, title, text, isRead }) {
    return (
        <>

            <div className="card w-96 rounded-none">
                <figure className=''>
                    <img
                        src={img}
                        alt="FOOD"
                        className='w-full max-sm:w-[95%]' />
                </figure>
                <div className="card-body mx-0 px-0 gap-4">
                    <h2 className="card-title font-fraunces text-[#131516] text-3xl max-sm:text-2xl max-sm:w-[94vw]">{title}</h2>
                    <p className='text-[#707c84] font-montserrat text-[1rem] max-sm:w-[94vw]'>{text}</p>
                    {isRead && <a className="flex items-center text-[#be7c68] cursor-pointer font-montserrat hover:text-[#131516]">
                        <span className="mr-2 font-bold text-xs">READ MORE</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="14" height="14" className="fill-current">
                            <path d="M6.125 1088h1797.89l-402.976 403 89.994 90L2048 1024l-556.966-557-89.994 90 402.976 403H6.125v128z"></path>
                        </svg>
                    </a>
                    }
                </div>
            </div>

        </>
    )
}

export default LastCard