import React from 'react';
import Navbar from '../component/Navbar';
import LastCard from '../component/LastCard'
import ImgCard from '../component/ImgCard';
import Footer from '../component/Footer';

function About() {
    return (
        <>
            <div className='bg-[#f5f5f5] w-full relative  z-10'>
                <div className='absolute w-[39vw] h-[163vh] bg-[#be9182] top-0 right-0 -z-1 max-sm:h-[66vh] max-sm:w-[28vw]'>
                </div>
                <div className='relative z-20'>
                    <Navbar />
                    <div className="flex flex-row items-center pl-7 max-sm:flex-col max-sm:items-start max-sm:mt-7">
                        <div className="order-2 -translate-x-6 -translate-y-4 max-sm:order-1 max-sm:w-full max-sm:-translate-x-0 max-sm:-translate-y-0">
                            <img
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg"
                                alt="About Me"
                                className="shadow-lg w-full h-auto "
                            />
                        </div>
                        <div className="order-1 flex-1 flex flex-col justify-evenly h-[35rem] max-sm:order-2 max-sm:h-[70rem]">
                            <h1 className="text-7xl font-fraunces font-semibold text-[#131516] mb-0 max-sm:mb-4 max-sm:text-2xl">
                                About Me
                            </h1>
                            <p className='text-[#707c84] font-montserrat w-[70%] mb-8 max-sm:mb-8'>
                                Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
                            </p>

                            <ImgCard wd='2%' title='Food Critic' text='Diam nulla blandit urna tristique sit etiam amet adipiscing.' icon={<i aria-hidden="true" className="fas fa-pizza-slice"></i>} />
                            <ImgCard wd='2%' title='Influencer' text='Et volutpat lacinia enim, purus et rhoncus nibh egestas habitant elit.' icon={<i aria-hidden="true" class="fas fa-bullhorn"></i>} />
                            <ImgCard wd='2%' title='Blogger' text='Venenatis egestas lectus interdum enim orci intege.' icon={<i aria-hidden="true" class="fas fa-newspaper"></i>} />
                        </div>
                    </div>

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

                    <div className='flex flex-col w-full py-24 items-center justify-evenly max-sm:py-8'>
                        <div className='text-[#131516] font-montserrat text-[.8rem] font-semibold pb-4'>
                            AS FEATURED IN
                        </div>
                        <div className='flex w-full flex-wrap items-center justify-evenly'>
                            <div className='max-sm:w-[50%] max-sm:flex max-sm:justify-center  '>
                                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg'

                                />
                            </div>
                            <div className='max-sm:w-[50%] max-sm:flex max-sm:justify-center'>
                                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg'
                                />
                            </div>
                            <div className='max-sm:w-[50%] max-sm:flex max-sm:justify-center'>
                                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg'
                                />
                            </div>
                            <div className='max-sm:w-[50%] max-sm:flex max-sm:justify-center'>
                                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg'
                                />
                            </div>
                            <div>
                                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg'
                                />
                            </div>

                        </div>

                    </div>

                    <div className='flex max-sm:flex-col w-full justify-between items-center px-9 gap-4 py-12 max-sm:py-3 '>
                        <h1 className='text-5xl max-sm:text-2xl font-bold font-fraunces text-[#131516]'>Follow along</h1>
                        <button className='py-2 px-5 border-[#c19787] border font-montserrat text-[#c19787] hover:bg-[#c19787] hover:text-white '>
                            @diannaadams
                        </button>
                    </div>
                    <div className='flex px-4 max-sm:flex-col items-center justify-evenly pb-20 mt-4 max-sm:ml-5 max-sm:pb-5 max-sm:gap-5'>
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-5.jpg' alt='food' />
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-4.jpg' alt='food' />
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-6.jpg' alt='food' />
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-3.jpg' alt='food' />
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-2.jpg' alt='food' />
                        <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-gallery-img-1.jpg' alt='food' />
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

export default About