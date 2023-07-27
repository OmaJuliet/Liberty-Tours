import hero from "../../Assets/Images/hero.png"
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section>
                <div className="container mx-auto flex lg:px-24 px-5 lg:py-6 lg:pt-0 pt-28 md:flex-row flex-col items-center bg-white text-black" id="home">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 mb-8 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold">Tour with <span className="text-brandColor">Liberty</span></h1>
                        <p className="mb-8 leading-relaxed text-lg">Explore Africa, With a help of Liberty Tour agency app, we can make your journey as swift and easy as possible.
                          Without much stress, you will be able to choose tour destination(s), pay for tour ticket, enjoy tour, share your preferencesto your friends and family.
                          Liberty Tours is concerned with taking interested tourists around tour sites in some parts of Africa.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-brandColor border-0 py-2 px-8 hover:bg-white hover:border-2 hover:border-brandColor hover:text-brandColor focus:outline-none rounded-lg text-lg"><Link to="/main">Explore &gt;</Link></button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;