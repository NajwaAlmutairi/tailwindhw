import React from 'react';
import Navbar from '../component/Navbar';
import LastCard from '../component/LastCard'
import ImgCard from '../component/ImgCard';
import Footer from '../component/Footer';

function Concat() {
    return (
        <>
            <div className='bg-[#f5f5f5] w-full relative  z-10'>
                <div className='absolute w-[39vw] h-[163vh] bg-[#be9182] top-0 right-0 -z-1 max-sm:h-[66vh] max-sm:w-[28vw]'>
                </div>
                <div className='relative z-20'>
                    <Navbar />
                    <div className="flex flex-row items-center pl-7 pt-4 max-sm:flex-col max-sm:items-start max-sm:mt-7">
                        <div className="order-2 -translate-x-6 -translate-y-2 max-sm:w-full max-sm:-translate-x-0 max-sm:-translate-y-0">
                            <div className='card bg-white p-16 border-8 border-gray-200 rounded-none'>
                                <h2 className='font-fraunces font-bold text-3xl mb-7'>Let's Talk</h2>
                                <label className='font-montserrat text-black flex items-center'>
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <div className='flex gap-3 pb-5'>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-gray-200 rounded-none"
                                    />
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-gray-200 rounded-none"
                                    />
                                </div>
                                <label className='font-montserrat text-black flex items-center'>
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-gray-200 mb-5 rounded-none"
                                />
                                <label className='font-montserrat text-black flex items-center'>
                                    Subject <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full bg-gray-200 mb-5 rounded-none"
                                />
                                <label className='font-montserrat text-black flex items-center'>
                                    Comment or Message <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered input-lg w-full bg-gray-200 mb-5 rounded-none"
                                />

                                <div className='w-[100%]'>
                                    <button className='w-[15vw] max-sm:w-[50vw] py-2 px-5 border-[#c19787] border font-montserrat text-[#c19787] hover:bg-[#c19787] hover:text-white'>
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 flex-1 flex flex-col justify-evenly h-[35rem] max-sm:h-[70rem] max-sm:pb-5">
                            <h1 className="text-7xl font-fraunces font-semibold text-[#131516] mb-0 max-sm:mb-4 max-sm:text-2xl">
                                Contact
                            </h1>
                            <p className='text-[#707c84] font-montserrat w-[70%] mb-8 max-sm:mb-8'>
                                Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
                            </p>
                            <ImgCard wd='2%' title='Address' text='1234 N Spring St, Los Angeles, CA 90012, United States.' icon={<i aria-hidden="true" class="fas fa-map-marker-alt"></i>} />
                            <ImgCard wd='2%' title='Phone' text='+01 - 123 456 7890' icon={<i aria-hidden="true" class="fas fa-phone"></i>} />
                            <ImgCard wd='2%' title='Email' text='mail@example.com' icon={<i aria-hidden="true" class="fas fa-envelope"></i>} />
                        </div>
                    </div>
                    <h2 className="flex p-8 items-center font-montserrat text-[1.5rem] text-[#c19787] mb-0 mt-0 max-sm:mt-8 max-sm:mb-4 ">
                        Follow Me
                    </h2>

                    <div className="flex space-x-24 mb-6 pl-10 max-sm:space-x-9 max-sm:pl-4">
                        <div className="flex flex-col items-start gap-2 mb-0 max-sm:mb-4">
                            <i className="fab fa-youtube text-4xl mb-1 text-[#be7c68]"></i>
                            <h3 className="font-semibold font-fraunces text-3xl max-sm:text-xl">1.2M+</h3>
                            <p className='text-[#707c84] font-montserrat'>Subscribers</p>
                        </div>
                        <div className="flex flex-col items-start gap-2 mb-0 max-sm:mb-4">
                            <i className="fab fa-instagram text-4xl mb-1 text-[#be7c68]"></i>
                            <h3 className="font-semibold font-fraunces text-3xl max-sm:text-xl">1.8M+</h3>
                            <p className='text-[#707c84] font-montserrat'>Followers</p>
                        </div>
                        <div className="flex flex-col items-start gap-2 mb-0 max-sm:mb-4">
                            <i className="fas fa-rss text-4xl mb-1 text-[#be7c68]"></i>
                            <h3 className="font-semibold font-fraunces text-3xl max-sm:text-xl">800K+</h3>
                            <p className='text-[#707c84] font-montserrat'>Readers</p>
                        </div>
                    </div>

                    <div className='flex max-sm:flex-col gap-7 px-8'>
                        <div className="w-[45%] max-sm:w-[98%]">
                            <img
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
                                alt="Food Blogger"
                                className="shadow-lg w-full h-auto "
                            />
                        </div>
                        <div className="w-[45%] flex flex-col p-16 items-start justify-start gap-10 max-sm:w-[98%] max-sm:gap-2 max-sm:p-5">
                            <h2 className='font-bold text-5xl'>"</h2>
                            <h2 className='font-bold text-2xl font-montserrat max-sm:text-sm'>Sem nibh tristique ut laoreet amet tortor eu urna, ante urna aliquam tellus suscipit turpis turpis volutpat sed malesuada cras amet, donec eget molestie ipsum semper nunc aenean sagittis consequat.</h2>
                            <img
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/signature.png"
                                alt="Sign"
                                className="w-[15%]"
                            />
                            <p className='font-montserrat font-bold text-xs'>Dianna Adams</p>
                        </div>

                    </div>


                    <div className='flex flex-col justify-center items-center bg-[#be7c68] p-24 max-sm:px-5 max-sm:py-16' >
                        <h1 className='font-bold text-5xl text-white max-sm:text-2xl font-fraunces'>Invite me to your restaurant.</h1>
                        <h1 className='font-bold text-5xl text-white my-5 max-sm:text-2xl font-fraunces max-sm:text-center max-sm:mt-0'>Get exposure of millions food lovers.</h1>
                        <p className='text-white font-montserrat w-[55%] mb-5 max-sm:w-[93%] max-sm:text-center max-sm:text-sm'>Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.</p>
                        <button className='text-sm font-montserrat font-semibold w-[12%] py-3  border bg-white text-[#be7c68] hover:bg-[#be7c68] hover:text-white hover:border-white max-sm:mt-4 max-sm:w-[33%] max-sm:px-0 '>
                            LET'S TALK
                        </button>
                    </div>

                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Concat