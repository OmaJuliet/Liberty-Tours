// import React from 'react';
// import hero from "../Images/hero.png"

// const Hero = () => {
//     return (
//         <>
//             <section>
//                 <div className="container mx-auto flex lg:px-16 px-5 py-8 md:flex-row flex-col items-center bg-white text-black" id="home">
//                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:mb-16 mb-8 md:mb-0 items-center text-center">
//                         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Travel With Liberty Travels</h1>
//                         <p className="mb-8 leading-relaxed">Build it better, build it faster, build it for less. Our experienced team of developers, designers, creatives and consultants have what it take to get your project from pipe-dream to perfection, click the link below for a free consultation.</p>
//                         <div className="flex justify-center">
//                             <button className="inline-flex text-white bg-brandColor border-0 py-2 px-6 focus:outline-none rounded text-lg">Explore &gt;</button>
//                             <button className="inline-flex text-green bg-none border-0 py-2 px-6 focus:outline-none rounded hover:bg-brandColor hover:text-white text-lg underline hover:no-underline ml-4">Our rates</button>
//                         </div>
//                     </div>
//                     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
//                         <img className="object-cover object-center rounded" alt="hero" src={hero} />
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Hero





// import React from "react";


// const Hero: React.FC = () => {
//   return (
//     <div
//       className="relative h-screen bg-center bg-cover"
//       style={{ background: `linear-gradient(180deg, #9568E1 0%, #5AA4C9 100%)`, }}>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-left lg:p-8 p-4 lg:w-1/2 w-80 md:w-1/2 rounded-3xl bg-white">
//         <h1 className="lg:text-4xl text-2xl font-bold text-brandColor">Travel with Liberty</h1>
//         <p className="mt-4 lg:text-xl text-sm">Build it better, build it faster, build it for less. Our experienced team of developers, designers, creatives 
//            and consultants have what it take to get your project from pipe-dream to perfection, click the link below for a free consultation.
//         </p>
//         <button className="px-4 py-3 rounded-full bg-brandColor text-white outline-none lg:text-lg text-sm mt-8 hover:bg-white hover:border-2 hover:border-brandColorDark hover:text-brandColorDark">Book Consultation</button>
//       </div>

//     </div>
//   );
// };

// export default Hero;





import React from "react";
import hero from "../../Assets/Images/hero.png"
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-screen flex bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, #9568E1 0%, #5AA4C9 100%), url(${hero})`,
      }}
      id="home"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:p-8 p-4 lg:w-1/2 w-80 md:w-1/2 rounded-3xl bg-white">
        <h1 className="lg:text-4xl text-2xl font-bold text-brandColor">
          Tour with Liberty
        </h1>
        <p className="mt-4 lg:text-xl text-sm">
          Explore Africa, With a help of Liberty Tour agency app, we can make your journey as swift and easy as possible.
          Without much stress, you will be able to choose tour destination(s), pay for tour ticket, enjoy tour, share your preferencesto your friends and family.
          Liberty Tours is concerned with taking interested tourists around tour sites in some parts of Africa.
        </p>
        <Link to="/auth">
          <button className="px-5 py-2 rounded-full bg-brandColor text-white outline-none lg:text-lg text-sm mt-8 hover:bg-white hover:border-2 hover:border-brandColor hover:text-brandColor">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
