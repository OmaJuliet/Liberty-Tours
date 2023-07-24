import greece from "../../Assets/Images/greece.svg";
import { Link } from "react-router-dom";
import leaf from "../../Assets/Icons/leaf.svg"
import map from "../../Assets/Icons/map.svg"
import send from "../../Assets/Icons/send.svg"
import heart from "../../Assets/Icons/heart.svg"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Reserve = () => {
    useEffect(() => {
        AOS.init()
    })

    return (
        <>
            <section className="container lg:px-32 px-4 lg:py-12 py-8 mx-auto flex flex-wrap">
                <div className="flex flex-col w-full mb-4 lg:px-24 px-6" data-aos="fade-up-right" data-aos-duration="2000">
                    <h1 className="sm:text-3xl text-2xl mb-2 text-black font-semibold">Make a <span className="text-brandColor">Reservation</span></h1>
                    <p className="text-base">Book your next trip in 3 easy steps!</p>
                </div>

                <div className="flex lg:flex-row flex-wrap w-full">
                    <div className="lg:w-3/5 lg:ml-24 ml-2 md:w-1/2 lg:pr-24 md:pr-4 md:py-6" data-aos="fade-up-right" data-aos-duration="2000">

                        <div className="flex relative pb-12">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-32 w-0.5 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brandColor inline-flex items-center justify-center text-white relative z-10">
                                <p className="justify-center text-lg mb-2 text-center align-center text-white w-5 h-5">1</p>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-semibold text-xl text-black mb-1 font-bigFont">Choose Destination</h2>
                                <p className="leading-relaxed text-lg font-smallFont">You can sign up easily through this <span className="text-brandColor cursor-pointer"><Link to="/auth">form</Link></span> and go through a list of tour destinations.</p>
                            </div>
                        </div>

                        <div className="flex relative lg:pb-12 pb-8">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-40 w-0.5 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brandColor inline-flex items-center justify-center text-white relative z-10">
                                <p className="justify-center text-lg mb-2 text-center align-center text-white w-5 h-5">2</p>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-semibold text-xl text-black mb-1 font-bigFont">Make Payments</h2>
                                <p className="leading-relaxed text-lg font-smallFont">See a destination you want? Go ahead and make payments for your tour trip. </p>
                            </div>
                        </div>

                        <div className="flex relative">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brandColor inline-flex items-center justify-center text-white relative z-10">
                                <p className="justify-center text-lg mb-2 text-center align-center text-white w-5 h-5">3</p>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="font-semibold text-xl text-black mb-1 font-bigFont">Reach destination venue</h2>
                                <p className="leading-relaxed text-lg font-smallFont">Let our tour guides take you on a fun filled exciting tour round your chosen tour site.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 h-96 lg:ml-0 ml-8 lg:mt-0 mt-8" data-aos="fade-up-left" data-aos-duration="2000">
                        <div className="bg-white lg:w-full w-72 h-96 rounded-lg shadow-2xl flex justify-center">
                            <div className="flex flex-col">
                                <img src={greece} className="lg:w-80 w-60 h-52 rounded-lg mt-4" />
                                <h2 className="mt-2 font-semibold text-lg">Trip to Greece  🚗</h2>
                                <div className="flex flex-row divide-x-2 mt-2 mb-4">
                                    <p>25-August-2023</p>
                                    <p className="ml-2">by Anne</p>
                                </div>
                                <div className="flex mb-4">
                                    <div className="mr-3 bg-gray-200 rounded-full p-2"><img src={leaf} alt="" className="" /></div>
                                    <div className="mr-3 bg-gray-200 rounded-full p-2"><img src={map} alt="" className="" /></div>
                                    <div className="bg-gray-200 rounded-full p-2"><img src={send} alt="" className="" /></div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <p className="textbase font-medium">Sample postcard</p>
                                    <img src={heart} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Reserve