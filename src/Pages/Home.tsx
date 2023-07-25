import { NavBarContextProvider } from "../context/NavBar";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Home Page/Footer";
import Hero from "../Components/Home Page/Hero";
import Testimonial from "../Components/Home Page/Testimonial";
import Partner from "../Components/Home Page/Partner";
import Reserve from "../Components/Home Page/Reserve";
import GalleryBlog from "../Components/Home Page/GalleryBlog";
import Faq from "../Components/Home Page/Faq";
import Features from "../Components/Home Page/Features";
import Subscribe from "../Components/Home Page/Subscribe";

const Home = () => {
  return (
    <>
      <section className="overflow-hidden">
        <NavBarContextProvider>
          <Navbar />
          <Hero />
          <Partner />
          <Reserve />
          <Features />
          <GalleryBlog />
          <Testimonial />
          <Faq />
          <Subscribe />
          <Footer />
        </NavBarContextProvider>
      </section>
    </>
  )
}

export default Home