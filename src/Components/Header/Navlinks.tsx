import { NavBarContext } from "../../context/NavBar";
import { FaTimes } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";


const NavLinks = () => {
  const { toggleNavBar, isNavbarOpen } = useContext(NavBarContext);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollTop);

  return (
    <div>
      <section onClick={toggleNavBar}>
        <div className="md:hidden fixed top-10 right-14 hover:cursor-pointer">
          {isNavbarOpen ? (
            <FaTimes className="font-light text-black text-2xl" />
          ) : (
            ""
          )}
        </div>
        <div>
          <ul className="items-center lg:flex-row md:flex-row md:py-4 flex flex-col mt-[9rem] md:mt-0 lg:mb-0 font-smallFont justify-center space-y-[80px] md:flex lg:space-x-6 md:space-x-2 md:space-y-0 lg:space-y-0">
            <li>
              <a
                href="/#home"
                className={`
                 ${
                   scrollTop >= 0 && scrollTop <= 952
                     ? ""
                     : ""
                 }
               text-lg lg:text-black text-white md:text-black cursor-pointer hover:text-brandColorDark transition duration-300`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`
                ${
                  scrollTop >= 952 && scrollTop <= 2560
                    ? ""
                    : ""
                }

                text-lg cursor-pointer hover:text-brandColorDark lg:text-black text-white md:text-black transition duration-300`}
              >
                 Features
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={` 
                 ${
                   scrollTop >= 2560 && scrollTop <= 2990
                     ? ""
                     : ""
                 }
                  text-lg lg:text-black text-white md:text-black cursor-pointer hover:text-brandColorDark transition duration-300`}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={` 
                 ${
                   scrollTop >= 2560 && scrollTop <= 2990
                     ? ""
                     : ""
                 }
                  text-lg lg:text-black text-white md:text-black cursor-pointer hover:text-brandColorDark transition duration-300`}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={` 
                 ${
                   scrollTop >= 2560 && scrollTop <= 2990
                     ? ""
                     : ""
                 }
                  text-lg lg:text-black text-white md:text-black cursor-pointer hover:text-brandColorDark transition duration-300`}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/auth"
                className={` 
                 ${
                   scrollTop >= 2560 && scrollTop <= 2990
                     ? ""
                     : ""
                 }
                  text-lg lg:text-black text-white md:text-black cursor-pointer hover:text-darkBrown transition duration-300`}
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavLinks;