import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a href="/" rel="noopener noreferrer" className="flex font-semibold items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-2xl text-brandColor">Liberty Tours</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Copyright© 2023 —
            <a href="https://www.linkedin.com/in/julietofoegbu" className="text-gray-600 ml-1 hover:text-brandColor hover:underline" rel="noopener noreferrer" target="_blank">@Juliet</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" rel="noopener noreferrer" className="text-gray-500">
              <FaTwitter className="w-5 h-5 text-brandColor" />
            </a>
            <a href="/" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <FaLinkedin className="w-5 h-5 text-brandColor" />
            </a>
            <a href="/" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <FaInstagram className="w-5 h-5 text-brandColor" />
            </a>
            <a href="/" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <FaFacebook className="w-5 h-5 text-brandColor" />
            </a>
          </span>
        </div>
      </footer>
  )
}

export default Footer