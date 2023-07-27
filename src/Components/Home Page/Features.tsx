import { useEffect } from "react";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import face from "../../Assets/Images/cover (1).svg";
import face2 from "../../Assets/Images/cover (2).svg";


const Features = () => {
    useEffect(() => {
        AOS.init()
    })


  return (
    <>
    {/* Boxes section */}
            <section id="features">
                <section className="container lg:px-12 lg:py-24 py-8 mx-auto">
                <div className="container mx-auto flex justify-center text-center px-4 mb-10">
                    <p className="bg-blue-300 text-brandColor text-lg py-2 px-8 font-semibold rounded-full">Features</p>
                </div>
                    <figure className="flex flex-wrap justify-center lg:w-full -m-4">
                        <section className="py-4 lg:p-4 px-2 lg:p-4 md:w-80 lg:w-96" data-aos="fade-up-right" data-aos-duration="2000">
                            <motion.article whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(59 130 246)" }} className="flex rounded-lg h-full p-8 flex-col bg-brandColor">
                                <h2 className="lg:text-2xl text-xl text-white  font-bold w-full">Connect with Other Tourists</h2>
                                <aside className="flex items-center mb-3 mt-8">
                                    <figure className="w-9 h-9 mr-2 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className="w-6 h-6 rounded-full" src={face} alt="notes" />
                                    </figure>
                                    <figure className="animate-pulse bg-gray-100 rounded px-20 py-4"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-6 justify-end">
                                    <figure className="animate-pulse bg-gray-300 rounded mr-2 px-20 py-4"></figure>
                                    <figure className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className="w-6 h-6 rounded-full" src={face2} alt="notes" />
                                    </figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-6">
                                    <figure className="w-9 h-9 mr-2 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className="n w-6 h-6 rounded-full" src={face} alt="notes" />
                                    </figure>
                                    <figure className="animate-pulse bg-gray-100 rounded px-20 py-4"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-6 justify-end">
                                    <figure className="animate-pulse bg-gray-300 rounded mr-2 px-20 py-4"></figure>
                                    <figure className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className="w-6 h-6 rounded-full" src={face2} alt="notes" />
                                    </figure>
                                </aside>
                            </motion.article>
                        </section>

                        <section className="px-0 py-4 lg:p-4 px-2 lg:p-4 md:w-80 w-96 lg:w-96 lg:ml-10" data-aos="fade-up-left" data-aos-duration="2000">
                            <motion.article whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px yellow" }} className="flex rounded-lg h-full p-8 flex-col bg-yellow-400">
                                <h2 className="lg:text-2xl text-xl text-white font-bold w-full">Explore Local Events in your Tour Location</h2>
                                <aside className="flex items-center mb-3 mt-4">
                                    <figure className=" animate-pulse bg-gray-300 rounded-lg w-full px-24 py-20"></figure>
                                </aside>
                                <aside className="flex items-center mt-4">
                                    <figure className="animate-pulse bg-gray-200 rounded-full p-2 mr-2 "></figure><p className="leading-relaxed lg:text-xl text-lg text-white ">Town Festivals</p>
                                </aside>
                                <aside className="flex mt-4 mb-4">
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-16 py-2"></figure>
                                    <figure className="animate-pulse bg-gray-300 rounded-full p-2 px-10 py-2 ml-2"></figure>
                                </aside>
                                <aside className="flex">
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-8 py-2"></figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-10 py-2 ml-2"></figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-10 py-0 ml-2"></figure>
                                </aside>
                            </motion.article>
                        </section>

                    </figure>
                </section>
            </section>
            </>
  )
}

export default Features