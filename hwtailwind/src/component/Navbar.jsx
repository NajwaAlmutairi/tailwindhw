import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-transparent w-full p-7 font-montserrat">
                <div className="navbar-start">
                    <a className='mr-6'>
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg' alt="Logo" />
                    </a>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex text-[#131516] text-xs font-bold">
                        <li className='text-[#c19787] hover:text-[#c19787] hover:bg-transparent'>
                            <Link to="/">HOME</Link>
                        </li>
                        <li className='hover:text-[#c19787] hover:bg-transparent'>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <a className='hover:text-[#c19787] hover:bg-transparent'>REVIEWS</a>
                        </li>
                        <li>
                            <a className='hover:text-[#c19787] hover:bg-transparent'>VIDEOS</a>
                        </li>
                        <li className='hover:text-[#c19787] hover:bg-transparent'>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex flex-row items-center justify-evenly w-40 h-10 ">
                        <a className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="18" height="18"
                                className="fill-[#ffffffd9] hover:fill-white">
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                            </svg>
                        </a>
                        <a className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="18" height="18"
                                className="fill-[#ffffffd9] hover:fill-white" >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                        </a>
                        <a className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="18" height="18"
                                className="fill-[#ffffffd9] hover:fill-white ">
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                            </svg>
                        </a>
                    </div>

                    <a className="hidden cursor-pointer lg:flex rounded-none border py-[.5rem] px-8 border-[#ffffffd9] 
                     text-[#ffffffd9] text-[0.9rem] hover:bg-white hover:text-black">LET'S TALK</a>

                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost bg-[#c19787] rounded-full"
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill='#ffffff'>
                                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="bg-white w-full h-full p-10 relative">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <ul className="flex text-[#545556] flex-col items-center justify-start h-full pt-10 space-y-4">
                        <li className='hover:text-[#c19787]'><Link to="/">Home</Link></li>
                        <li className='hover:text-[#c19787]'><Link to="/about">About</Link></li>
                        <li><a className='hover:text-[#c19787]'>Reviews</a></li>
                        <li><a className='hover:text-[#c19787]'>Videos</a></li>
                        <li className='hover:text-[#c19787]'> <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </dialog>

        </>
    );
};

export default Navbar;
