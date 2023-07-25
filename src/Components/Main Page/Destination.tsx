import React, { useState } from 'react';
import TourData from '../../Data/tourData';
import { FaFilter, FaSearch, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  //set state for the search functionality
  const [searchTerm, setSearchTerm] = useState('');
  //set state for the location filter functionality
  const [filterTerm, setFilterTerm] = useState('All');
  //set state for the price filter functionality
  const [priceFilter, setPriceFilter] = useState('All');
  //set state for the mark filter functionality
  const [markFilter, setMarkFilter] = useState('All');
  const [showSubLocationFilter, setShowSubLocationFilter] = useState(true);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showMarkFilter, setShowMarkFilter] = useState(false);
  // Pagination
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);


  //Modal pop-up functionality
  const [showModal, setShowModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<null | typeof TourData[number]>(null);
  const openModal = (id: number) => {
    const destination = filteredDestinations.find((item) => item.id === id);
    setSelectedDestination(destination || null);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };


  const categories = ['All', 'West Africa', 'East Africa', 'Southern Africa', 'North Africa'];
  const prices = ['All', '$500', '$800', '$1000'];
  const marks = ['All', 'Land', 'Waterfall', 'Park', 'City', 'Water/Beach', 'Forest/Mountain', 'Structure'];


  const handleSearchInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (category: React.SetStateAction<string>) => {
    setFilterTerm(category);
  };

  const handlePriceFilterChange = (price: React.SetStateAction<string>) => {
    setPriceFilter(price);
  };

  const handleMarkFilterChange = (mark: React.SetStateAction<string>) => {
    setMarkFilter(mark);
  };

  const toggleSubLocationFilter = () => {
    setShowSubLocationFilter(!showSubLocationFilter);
  };

  const togglePriceFilter = () => {
    setShowPriceFilter(!showPriceFilter);
  };

  const toggleMarkFilter = () => {
    setShowMarkFilter(!showMarkFilter);
  };

  const filteredDestinations = TourData.filter(
    (destination) =>
      (filterTerm === 'All' || destination.category === filterTerm) &&
      (priceFilter === 'All' || destination.price === priceFilter) &&
      (markFilter === 'All' || destination.mark === markFilter) &&
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const navigate = useNavigate();

  const handlePurchaseTicket = () => {
    // Perform the additional logic related to ticket purchase here
    // For now, we are just navigating to the "DestinationDetailsPage" with the selected destination
    if (selectedDestination) {
      navigate(`/destination/${selectedDestination.id}`);
    }
  };

  //pagination
  const totalDestinations = filteredDestinations.length;
  const totalPages = Math.ceil(totalDestinations / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalDestinations);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <section className="container mx-auto flex flex-col lg:flex-row px-2 py-8">
        {/* Left hand sidebar */}
        <section className="lg:w-1/4 lg:px-4">
          <section className="relative w-full mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchInputChange}
              className="w-full h-full py-4 px-8 text-base text-black rounded-lg border-2 border-gray-100 bg-gray-200 outline-none"
              placeholder="Search for tour destination..."
            />
            <i>
              <FaSearch className="absolute left-4 top-5 text-lg w-4 h-4 text-center text-gray-400 focus:outline-none" />
            </i>
          </section>

          <section className="flex mt-4">
            <span>
              <FaFilter className="mt-2" />
            </span>
            <p className="text-xl font-semibold ml-2">Apply Filters:</p>
          </section>


          <section id="desktop-screen-size">
            <div className="hidden lg:block mt-6 divide-y-2 divide-brandColor">
              <div className="flex flex-row justify-between cursor-pointer" onClick={toggleSubLocationFilter}>
                <p className="text-lg font-semibold">By Sub-locations: </p>
                <IoIosArrowDown className={`mt-2 ${showSubLocationFilter ? 'transform rotate-180' : ''}`} />
              </div>
              <div className="bg-gray-200 rounded-lg">
                {showSubLocationFilter &&
                  categories.map((category) => (
                    <p
                      key={category}
                      onClick={() => handleFilterChange(category)}
                      className={`${filterTerm === category ? 'active bg-blue-400 py-2 px-4 rounded-lg text-white' : ''
                        } cursor-pointer text-brandColor text-lg mt-1 px-2 py-1`}
                    >
                      {category}
                    </p>
                  ))}
              </div>
            </div>
          </section>

          <section id="desktop-screen-size">
            <div className="hidden lg:block mt-10 divide-y-2 divide-brandColor">
              <div className="flex flex-row justify-between cursor-pointer" onClick={toggleMarkFilter}>
                <p className="text-lg font-semibold">By Mark: </p>
                <IoIosArrowDown className={`mt-2 ${showMarkFilter ? 'transform rotate-180' : ''}`} />
              </div>
              <div className="bg-gray-200 rounded-lg">
                {showMarkFilter &&
                  marks.map((mark) => (
                    <p
                      key={mark}
                      onClick={() => handleMarkFilterChange(mark)}
                      className={`${markFilter === mark ? 'active bg-blue-400 py-2 px-4 rounded-lg text-white' : ''
                        } cursor-pointer text-brandColor text-lg mt-1 px-2 py-1`}
                    >
                      {mark}
                    </p>
                  ))}
              </div>
            </div>
          </section>

          <section id="desktop-screen-size">
            <div className="hidden lg:block mt-10 divide-y-2 divide-brandColor">
              <div className="flex flex-row justify-between cursor-pointer" onClick={togglePriceFilter}>
                <p className="text-lg font-semibold">By Price: </p>
                <IoIosArrowDown className={`mt-2 ${showPriceFilter ? 'transform rotate-180' : ''}`} />
              </div>
              <div className="bg-gray-200 rounded-lg">
                {showPriceFilter &&
                  prices.map((price) => (
                    <p
                      key={price}
                      onClick={() => handlePriceFilterChange(price)}
                      className={`${priceFilter === price ? 'active bg-blue-400 py-2 px-4 rounded-lg text-white' : ''
                        } cursor-pointer text-brandColor text-lg mt-1 px-2 py-1`}
                    >
                      {price}
                    </p>
                  ))}
              </div>
            </div>
          </section>


          <section id="small-screen-size">
            <div className="flex flex-wrap flex-row justify-between mb-4 lg:hidden block">
              <p className="mt-4">By sub-locations:</p>
              <select
                value={filterTerm}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="mr-2 text-brandColor border-brandColor border-2 outline-none py-2 px-4 h-10 rounded-lg text-lg mt-2"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section id="small-screen-size">
            <div className="flex flex-wrap flex-row justify-between mb-4 lg:hidden block">
              <p className="mt-4">By mark:</p>
              <select
                value={markFilter}
                onChange={(e) => handleMarkFilterChange(e.target.value)}
                className="mr-2 text-brandColor border-brandColor border-2 outline-none py-2 px-4 h-10 rounded-lg text-lg mt-2"
              >
                {marks.map((mark) => (
                  <option key={mark} value={mark}>
                    {mark}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section id="small-screen-size">
            <div className="flex flex-wrap flex-row justify-between mb-4 lg:hidden block">
              <p className="mt-4">By price:</p>
              <select
                value={priceFilter}
                onChange={(e) => handlePriceFilterChange(e.target.value)}
                className="mr-2 text-brandColor border-brandColor border-2 outline-none py-2 px-4 h-10 rounded-lg text-lg mt-2"
              >
                {prices.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </section>


        {/* Right hand panel */}
        <section className="lg:w-3/4 lg:px-2">
          <div className="mb-8">
            <div className="rounded-lg px-4 py-4 border-2 border-gray-200 shadow-md text-lg">
              Showing {startIndex + 1} - {endIndex} of {totalDestinations} results
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredDestinations.slice(startIndex, endIndex).map((destination) => (
              <div className="p-1" key={destination.id} onClick={() => openModal(destination.id)}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto cursor-pointer">
                  <img
                    className="h-48 w-full object-cover object-center"
                    src={destination.image}
                    alt={destination.name}
                  />
                  <div className="px-4 py-2">
                    <h1 className="text-xl font-bold mb-1">{destination.name}</h1>
                    <div className="flex flex-wrap justify-between mb-1">
                      <p className="leading-relaxed mt-4 text-lg">Location: {destination.location}</p>
                      <p className="leading-relaxed mt-4 text-lg">{destination.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination buttons */}
          <div className="flex justify-center mt-4">
            <button
              className="py-2 px-4 mx-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
             Prev 
            </button>
            <button
              className="py-2 px-4 mx-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>

          {showModal && selectedDestination && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white lg:w-3/4 lg:h-5/6 w-96 rounded-lg p-6 relative">
                {/* Modal content */}
                <img src={selectedDestination.image} alt={selectedDestination.name} className="w-full h-72 object-cover mb-4 rounded-lg" />
                <h1 className="text-2xl font-bold mb-2">{selectedDestination.name}</h1>
                <p className="text-lg mb-2">Location: {selectedDestination.location}</p>
                <p className="text-lg">{selectedDestination.info}</p>
                <p className="text-lg mb-4">Cordinates: {selectedDestination.coor}</p>
                <div className="flex flex-row justify-between mb-2">
                  <p className="text-lg italic">Estimated tour budget per individual: <span className="font-medium text-lg">{selectedDestination.price}</span></p>
                  <button
                    className="bg-blue-400 text-white p-2 rounded-lg hover:bg-white hover:text-blue-400 hover:border-2 hover:border-blue-400"
                    onClick={handlePurchaseTicket}>
                    Purchase ticket
                  </button>
                </div>
                <button onClick={closeModal} className="absolute top-3 right-2 focus:outline-none">
                  <svg className="w-5 h-5 text-gray-600 hover:text-gray-800 font-semibold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M2.646 2.646a.5.5 0 0 1 .708 0L10 9.293l6.646-6.647a.5.5 0 0 1 .708.708L10.707 10l6.647 6.646a.5.5 0 0 1-.708.708L10 10.707l-6.647 6.647a.5.5 0 0 1-.708-.708L9.293 10 2.646 3.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

        </section>

      </section>
    </>
  );
};

export default Destination;
