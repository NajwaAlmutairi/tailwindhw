import React from 'react';
import Navbar from './Navbar';
import LastCard from './LastCard'
import ImgCard from './ImgCard';
import Footer from './Footer';

function Home() {
    return (
        <>
            <div className='bg-[#f5f5f5] w-full relative  z-10'>
                <div className='absolute w-[39vw] h-[163vh] bg-[#be9182] top-0 right-0 -z-1 max-sm:h-[60vh] max-sm:w-[28vw]'>
                </div>
                <div className='relative z-20'>
                    <Navbar />
                    <div className="flex flex-row items-center mt-20 p-4 pl-7 max-sm:flex-col max-sm:items-start max-sm:mt-7">
                        <div className="order-2 -translate-x-6 -translate-y-4 max-sm:order-1 max-sm:w-full max-sm:-translate-x-0 max-sm:-translate-y-0">
                            <img
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
                                alt="Food Blogger"
                                className="shadow-lg w-full h-auto "
                            />
                        </div>
                        <div className="order-1 flex-1 flex flex-col justify-evenly h-[35rem] max-sm:order-2 max-sm:h-[70rem]">
                            <h2 className="flex items-center font-montserrat text-xl text-[#c19787] mb-0 mt-0 max-sm:mt-8 max-sm:mb-4 ">
                                <span className="border-t border-[#c19787] w-14 mr-2"></span>
                                welcome
                            </h2>
                            <h1 className="text-7xl font-fraunces font-semibold text-[#131516] mb-0 max-sm:mb-4 max-sm:text-2xl">
                                I’m Dianna
                                <span className="sm:block"> Adams</span>
                            </h1>

                            <h2 className='text-[#131516] font-fraunces text-3xl sm:font-bold mb-0 max-sm:mb-4 max-sm:text-xl'>
                                Food Critic / Influencer / Blogger
                            </h2>
                            <p className='text-[#707c84] font-montserrat mb-0 max-sm:mb-8'>
                                Massa urna magnis dignissim id euismod porttitor vitae <br />
                                etiam viverra nunc at adipiscing sit morbi aliquet <br />
                                mauris porttitor nisi, senectus pharetra, ac porttitor orci.
                            </p>
                            <div>
                                <button className='py-2 px-5 font-montserrat font-semibold text-[.7rem] border-[#c19787] border text-[#c19787] hover:bg-[#c19787] hover:text-white mb-0 max-sm:mb-8 '>
                                    JOIN INSIDER
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-24 mb-6 pl-10 pt-20 max-sm:space-x-9 max-sm:pl-4">
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
                        <h1 className='text-5xl max-sm:text-2xl font-bold font-fraunces text-[#131516]'>Latest Reviews</h1>
                        <button className='py-2 px-5 border-[#c19787] border font-montserrat text-[#c19787] hover:bg-[#c19787] hover:text-white '>
                            VIEW ALL
                        </button>
                    </div>
                    <div className='flex max-sm:flex-col items-center justify-evenly pb-20 mt-4 max-sm:items-start max-sm:ml-5 max-sm:pb-5'>
                        <LastCard isRead={'yes'} title="Grilled Flank Steak with Chimichurri" text='Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.' img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg" />
                        <LastCard isRead={'yes'} title="Mushroom Penne with Walnut Pesto" text="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus." img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg" />
                        <LastCard isRead={'yes'} title="Garlic Butter White Wine Shrimp Linguine"
                            text="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
                            img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg" />
                    </div>
                    <div className=' bg-[#f2efee]'>
                        <div className='flex flex-col w-full justify-between items-center px-9 py-18 pt-24 max-sm:px-5 max-sm:py-8 max-sm:pt-14 gap-9 '>
                            <h1 className='text-5xl max-sm:text-2xl font-bold text-[#131516] font-fraunces'>Best in Class Restaurant</h1>
                            <p className='text-[#707c84] text-lg text-center font-montserrat w-[70%] max-sm:w-[98%] mb-10'>Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.</p>
                        </div>
                        <div className='flex max-sm:flex-col flex-wrap items-center justify-evenly  mt-4 max-sm:items-start max-sm:ml-5'>
                            <LastCard title="Bern's Steak House" text='Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.'
                                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg" />
                            <LastCard title="Eewak Korean Restaurant" text="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
                                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg" />
                            <LastCard title="The Ramban Vegan House"
                                text="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
                                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg" />
                            <LastCard title="Maniest Bake & Cake" text="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
                                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg" />
                            <LastCard title="Crush Los Angeles" text="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
                                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg" />
                            <LastCard title="The Mike Winery"
                                text="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
                                img="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg" />
                        </div>
                  
                    <div className="card card-side bg-white mx-10 max-sm:mx-0 border-8 border-[#e0e0e0] rounded-none mt-24 max-sm:flex-col max-sm:mt-16">
                        <figure className="transform -translate-y-10 translate-x-9 max-sm:translate-x-4 max-sm:w-[92%] max-sm:-translate-y-7 max-sm:h-auto">
                            <img
                                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
                                alt="form"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body mt-14 ml-10 gap-9 max-sm:gap-4 max-sm:m-0 max-sm:p-0 max-sm:ml-5 max-sm:mt-8">
                            <h2 className="card-title text-6xl font-fraunces text-[#131516] max-sm:text-3xl">Join Mailing List</h2>
                            <p className='text-[#707c84] font-montserrat text-xl max-sm:text-sm'>Sign up and get all the latest, ad-free reviews, recipes and <br /> news sent to your inbox.</p>
                            <div className='mb-3 max-sm:mt-10'>
                                <input type="email" placeholder="Email address" className="input py-3 pb-5 pr-32 max-sm:w-[93%] mr-2 focus:border-none focus:outline-dotted focus:outline-black input-bordered rounded-none bg-[#fafafa] placeholder-[#828382] placeholder:text-lg max-sm:placeholder:text-sm " />
                                <button className='max-sm:mt-4  font-montserrat max-sm:font-bold max-sm:w-[95%] py-2 px-10 border-[#c19787] border text-[#c19787] hover:bg-[#c19787] hover:text-white'>
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='flex justify-between items-center max-sm:justify-center px-9 pt-32 pb-5 max-sm:px-7 max-sm:pt-10 max-sm:pb-0'>
                        <h1 className='text-6xl max-sm:text-2xl font-fraunces font-semibold text-[#131516]'>Latest Videos</h1>
                    </div>
                    <div className='flex max-sm:flex-col items-start justify-between px-10 py-11 mt-2 max-sm:px-5'>
                        <div className='w-[48%] max-sm:w-[98%] flex flex-col justify-evenly'>
                            <div className="relative">
                                <img src='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg' />
                                <a className='absolute inset-0 flex items-center justify-center' href="#">
                                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#be7c68] group">
                                        <i className="fa-solid fa-play text-[#be7c68] text-2xl group-hover:text-white"></i>
                                    </div>
                                </a>
                            </div>
                            <h1 className='font-bold font-fraunces text-4xl py-4 mt-4 max-sm:text-lg'>Dianna Adams visits the Sooto Restaurant | Uncovered Miami</h1>
                            <p className='text-[#707c84] font-montserrat w-[85%] max-sm:w-[98%] pb-10'>A consectetur eget ultrices nec velit purus quam dignissim purus gravida aliquam mattis ultrices eget ultricies tincidunt et erat enim vitae sollicitudin tellus placerat</p>
                        </div>
                        <div className='flex flex-col justify-evenly items-start pb-10 w-[48%] gap-10 max-sm:w-[98%] '>
                            <ImgCard title='Family Dinner - Latea pulvinar scelerisque diam tempus facilisi' text='Enim imperdiet fames nisl, purus et diam aliquet' img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg' />
                            <ImgCard title='Lobortis turpis turpis vehicula laoreet egestas enim ornare' text='Enim imperdiet fames nisl, purus et diam aliquet' img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg' />
                            <ImgCard title='Tempus quis ac viverra condimentum sit nulla viverra' text='Enim imperdiet fames nisl, purus et diam aliquet' img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg' />
                            <ImgCard title='Quis mauris egestas enim urna dictum' text='Enim imperdiet fames nisl, purus et diam aliquet' img='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg' />
                            <button className='max-sm:mt-4 font-montserrat text-sm font-semibold max-sm:w-[95%] w-[98%] py-2 px-10 border-[#be7c68] border text-[#be7c68] hover:bg-[#be7c68] hover:text-white'>
                                VIEW ALL VIDEOS
                            </button>
                        </div>
                    </div >

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
    );
}

export default Home;
