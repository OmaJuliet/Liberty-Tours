import signup1 from "../Assets/Images/gallery1.png";
import signup2 from "../Assets/Images/gallery2.png";
import signup3 from "../Assets/Images/gallery4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register: React.FC = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  //toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // sign up with email and password
  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: { user: any; }) => {
        const user = userCredential.user;
        toast.success(user)
        navigate("/login")
      })
      .catch((error: { code: any; message: any; }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage)
      });
  }

  //// sign up with google account
  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/login")
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <section className="flex items-center bg-gray-50">
        <section className="flex-1 max-w-full mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex lg:flex-row flex-col md:flex-row">
            <section className="lg:w-1/2 w-full lg:block hidden">
              <Slider {...settings} className="">
                <div className="lg:h-screen lg:w-32 md:h-auto md:w-1/2">
                  <img
                    className="object-cover w-full h-full"
                    src={signup1}
                    alt="software"
                  />
                </div>
                <div className="lg:h-screen lg:w-32 md:h-auto md:w-1/2">
                  <img
                    className="object-cover w-full h-full"
                    src={signup2}
                    alt="blockchain"
                  />
                </div>
                <div className="lg:h-screen lg:w-32 md:h-auto md:w-1/2">
                  <img
                    className="object-cover w-full h-full"
                    src={signup3}
                    alt="games"
                  />
                </div>
              </Slider>
            </section>

            <div className="items-center justify-center px-6 sm:px-12 py-12 md:w-full">
              <h1 className="mb-1 lg:text-4xl text-3xl font-semibold text-center text-black">
                Create Your Account
              </h1>
              <form className="w-full mt-4">
                <div className="mt-10">
                  <label htmlFor="email" className="block text-lg">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 text-base bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-brandColorDark" />
                </div>

                <div className="mt-10 relative">
                  <label htmlFor="password" className="block text-lg">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="*******"
                      className="w-full px-4 py-4 text-base bg-gray-100 rounded-md focus:outline-none focus:ring-1 focus:ring-brandColorDark"
                    />
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="align-center items-center mt-8">
                  <button type="submit" onClick={onSubmit} className="bg-brandColor text-white outline-none px-4 py-4 mb-2 w-full rounded-lg text-lg">Sign Up</button>
                </div>

                <div
                  className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p
                    className="mx-4 mb-0 text-center dark:text-black">
                    OR
                  </p>
                </div>

                <section className="container mx-auto flex justify-center my-4">
                  <div className="flex flex-col w-full">
                    <button
                      type="button"
                      onClick={handleGoogleSignup}
                      className="flex justify-center mb-3 flex px-4 py-4 border-2 border-gray-300 text-sm uppercase leading-normal rounded text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <FcGoogle className="mr-2 h-5 w-5" />
                      sign up with google
                    </button>
                  </div>
                </section>

              </form>


              <div className="flex justify-center">
                <p className="text-gray-500">
                  Already have an account?
                  <span className="ml-2 underline hover:text-brandColor">
                    <NavLink to="/login" >
                      Login
                    </NavLink>
                  </span>
                </p>
              </div>

            </div>
          </div>
        </section>

      </section>
      <ToastContainer />
    </>
  );
};


export default Register;