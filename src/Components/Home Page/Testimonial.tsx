import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonial = () => {
  useEffect(() => {
    AOS.init()
  })

  const courseCards = [
    {
      id: '1',
      imageSrc:
        '/Images/test2.svg',
      name: "Steve",
      star: <FaStar className="text-orange-500" />,
      location: "Phillipines",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa in ullamcorper convallis, tortor diam pretium quam, vulputate ultrices magna mi in mauris."
    },
    {
      id: '2',
      imageSrc:
        '/Images/face1.jpeg',
      name: "Regina",
      star: <FaStar className="text-orange-500" />,
      location: "Dominican Republic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa in ullamcorper convallis, tortor diam pretium quam, vulputate ultrices magna mi in mauris."
    },
    {
      id: '3',
      imageSrc:
        '/Images/test1.svg',
      name: "Patrick",
      star: <FaStar className="text-orange-500" />,
      location: "Sea level",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa in ullamcorper convallis, tortor diam pretium quam, vulputate ultrices magna mi in mauris."
    },
    {
      id: '4',
      imageSrc:
        '/Images/test4.svg',
      name: "Bob",
      star: <FaStar className="text-orange-500" />,
      location: "Australia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa in ullamcorper convallis, tortor diam pretium quam, vulputate ultrices magna mi in mauris."
    }
  ]


  return (
    <>
      <section className="container lg:px-32 px-3 lg:py-24 py-12 mx-auto" id="courses">
        <section className="text-center px-4 mb-4">
          <h1 className="text-brandColor text-2xl font-bold">Testimonials</h1>
          <p>What users say about Liberty Tours and Guides</p>
        </section>
        <section className="flex flex-wrap lg:px-2 px-4 lg:-m-10 -m-4 lg:my-4">
          {courseCards.map((card, index) => (
            <div className="p-4 md:w-1/2 lg:w-1/4 w-full" key={index} data-aos="flip-up" data-aos-duration="2000">
              <figure className="h-full rounded-2xl overflow-hidden shadow-md">
                <img src={card.imageSrc} className="w-24 h-24 flex container mx-auto justify-center mt-4 object-cover object-center rounded-full" alt="" />
                <div className="py-2 px-3">
                  <p className="text-sm mb-4 px-4 mt-2">{card.description}</p>
                  <div className="flex flex-col items-center flex-wrap">
                    <span className="flex flex-row">{card.star}{card.star}{card.star}{card.star}{card.star}</span>
                    <h1 className="my-1 text-brandColor font-semibold text-lg">{card.name}</h1>
                    <p className="mb-3">{card.location}</p>
                  </div>
                </div>
              </figure>
            </div>
          ))}
        </section>
        <section className="mt-6 flex justify-center">
          <button className="border-2 border-brandColor py-2 px-5 text-brandColor rounded-full text-center">View all</button>
        </section>
      </section>
    </>
  )
}

export default Testimonial


