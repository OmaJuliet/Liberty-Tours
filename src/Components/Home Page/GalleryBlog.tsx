import { useState, useEffect } from "react";
import "../../Styles/Home Page/gallery.css";
import gallery1 from "../../Assets/Images/africa5.jpg";
import gallery2 from "../../Assets/Images/africa6.jpg";
import gallery3 from "../../Assets/Images/africa13.jpeg";
import gallery4 from "../../Assets/Images/africa18.jpeg";
import gallery5 from "../../Assets/Images/africa32.jpg";
import gallery6 from "../../Assets/Images/africa30.jpg";
import gallery7 from "../../Assets/Images/africa36.jpg";
import gallery8 from "../../Assets/Images/africa7.webp";
import gallery9 from "../../Assets/Images/africa15.jpg";
import gallery10 from "../../Assets/Images/africa29.jpg";
import gallery11 from "../../Assets/Images/africa23.webp";
import gallery12 from "../../Assets/Images/africa34.jpg";
import gallery13 from "../../Assets/Images/africa37.jpg";
import gallery14 from "../../Assets/Images/africa38.jpg";
import gallery15 from "../../Assets/Images/africa36.jpg";
import gallery16 from "../../Assets/Images/africa19.webp";

const GalleryBlog = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
    {isSmallScreen ? (
        <div className="my-12"> 
            <p className="text-center text-black font-bold text-xl">Smaller screen size design for the "Gallery" page is still a work in progress</p>
        </div>
      ) : (
      <>
        <div className="container mx-auto flex justify-center text-center px-4 mt-8" id="gallery">
          <p className="bg-blue-300 text-brandColor text-lg py-2 px-4 font-semibold rounded-full">Our Gallery Blog</p>
        </div>
        <div className="container mx-auto flex justify-center text-center px-4 mt-2">
          <p className="text-base">Hover over each image to enlarge it</p>
        </div>
          <span className="background">
              <section className="gallery">
                <article className="img-card">
                  <figure>
                    <img src={gallery1} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery2} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery3} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery4} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery5} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery6} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery7} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery8} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery9} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery10} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery11} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery12} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery13} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery14} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery15} alt="" className="" />
                  </figure>
                </article>

                <article className="img-card">
                  <figure>
                    <img src={gallery16} alt="" className="" />
                  </figure>
                </article>

              </section>
            </span></>
       )}
    </>
  )
}

export default GalleryBlog