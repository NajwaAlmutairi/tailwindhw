import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer text-base-content font-montserrat px-6 py-16 flex items-center justify-between max-sm:flex-col max-sm:justify-center  ">
                <div className='pr-[2rem] max-sm:pr-0'>
                    <a>
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg' alt="Logo" />
                    </a>
                </div>
                <nav className="flex flex-grow justify-center">
                    <div className="flex gap-12 max-sm:gap-5">
                        <a className="text-[.9rem] text-[#131516] cursor-pointer hover:text-[#c19787]">Home</a>
                        <a className="text-[.9rem] text-[#131516] cursor-pointer hover:text-[#c19787]">About</a>
                        <a className="text-[.9rem] text-[#131516] cursor-pointer hover:text-[#c19787]">Reviews</a>
                        <a className="text-[.9rem] text-[#131516] cursor-pointer hover:text-[#c19787]">Videos</a>
                        <a className="text-[.9rem] text-[#131516] cursor-pointer hover:text-[#c19787]">Contact</a>
                    </div>
                </nav>
                <nav>
                    <div className="flex gap-8">
                        <a className="hover:fill-black cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20"
                                viewBox="0 0 576 512"
                                className="fill-current text-[#b57f6c] hover:text-black">
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                            </svg>
                        </a>
                        <a className="hover:fill-black cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20"
                                viewBox="0 0 448 512"
                                className="fill-current text-[#b57f6c] hover:text-black">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                        </a>
                        <a className="hover:fill-black cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20"
                                viewBox="0 0 512 512"
                                className="fill-current text-[#b57f6c] hover:text-black">
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
            <div className='flex justify-between px-6 pb-11 max-sm:flex-col max-sm:gap-3 max-sm:items-center'>
                <div className='text-[#707c84] text-[.9rem]'>
                    © 2024 Food Blogger & Influencer
                </div>
                <div className='text-[#707c84] text-[.9rem]'>
                    Powered by Food Blogger & Influencer
                </div>
            </div>

        </>
    )
}

export default Footer