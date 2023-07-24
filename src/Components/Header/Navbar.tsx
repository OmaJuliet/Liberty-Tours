import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { NavBarContext } from "../../context/NavBar";
import NavLinks from "./Navlinks";
// import logo from '../../Images/logo.webp'


const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { toggleNavBar, isNavbarOpen } = useContext(NavBarContext);

  return (
    <>
      <nav className="fixed w-full md:px-2 lg:px-12 lg:sticky md:sticky top-0 z-50  bg-white shadow-sm border-b-[1px] border-[#d0d0d0] md:bordertransparent">
        <section className="justify-between px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-4">
          <section>
            <div className="flex items-center justify-between py-3 md:py-2 lg:py-0 md:block ">
              <div className="w-[70px] h-[40px] md:w-[110px] lg:w-[170px] md:h-[70px]">
                <img src="" alt="Liberty Tours logo" className="w-full h-full" />
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  {!isNavbarOpen ? (
                    <FaBars
                      className="text-2xl lg:hidden"
                      onClick={toggleNavBar}
                    />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </section>
          {isNavbarOpen ? (
            <div className="fixed top-0 inset-y-0 w-full inset-x-0 bg-black/[0.65] md:hidden"></div>
          ) : (
            ""
          )}
          {/* MOBILE VIEW */}
          <div
            className={`md:hidden flex-1 justify-between fixed top-[0px] md:inset-x-0 inset-y-0 w-[250px] md:relative right-0 pb-3 md:pb-0 lg:mt-2 md:mt-8 md:bg-transparent bg-brandColor transition duration-300 ${
              !isNavbarOpen
                ? "translate-x-[120%] md:translate-x-[0] "
                : "-translate-x-[0%]"
            }`}
          >
            <NavLinks />
          </div>
          {/* DESKTOP VIEW */}
          <div className="hidden md:flex">
            <NavLinks />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;