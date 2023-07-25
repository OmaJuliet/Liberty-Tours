import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          console.log('uid', currentUser.uid);
        } else {
          setUser(null);
        //   console.log('user is logged out');
          toast("You've succesfully logged out", {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  
      return () => unsubscribe();
    }, []);
  
  
      const navigate = useNavigate();
      const handleLogout = () => {               
          signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully")
          }).catch((error: any) => {
            console.log("An error occurred")
          });
      }


    return (
        <>
            <nav className="w-full shadow font-serif">
                <section className="justify-between lg:px-6 px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-4">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <a href="/" className="text-3xl text-brandColor">Liberty Travels</a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <FaTimes />
                                    ) : (
                                        <FaBars />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex lg:space-x-6 md:space-x-2 md:space-y-0">
                                <li><a href="/" className="text-xl hover:text-brandColor hover:underline cursor-pointer">
                                    Home
                                </a></li>
                                <li><a href="/" className="text-xl hover:text-brandColor hover:underline cursor-pointer">
                                    Collection
                                </a></li>
                                <li><a href="/chat" className="text-xl hover:text-brandColor hover:underline cursor-pointer">
                                    Chat
                                </a></li>
                                <li><p onClick={handleLogout} className="text-xl hover:text-brandColor hover:underline cursor-pointer">
                                    Logout
                                </p></li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:hidden md:inline-block mt-6 mb-2">
                                {user && <p className="text-xl underline cursor-pointer">{user.email}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                    {user && <p className="text-xl underline cursor-pointer"> {user.email}</p>}
                    </div>
                </section>
            </nav>
            <ToastContainer />
        </>
    )
}

export default Nav