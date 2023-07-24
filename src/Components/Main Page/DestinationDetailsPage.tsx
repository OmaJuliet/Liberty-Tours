import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TourData from '../../Data/tourData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NotFound from './NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { usePaystackPayment } from 'react-paystack';


const DestinationDetailsPage = () => {
  const { id } = useParams();
  const [numTickets, setNumTickets] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const selectedDestination = TourData.find((destination) => destination.id === parseInt(id || '', 10));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);


  useEffect(() => {
    const pricePerTicket = parseFloat(selectedDestination?.price.replace('$', '') || '0');
    const numTicketsInt = parseInt(numTickets, 10);
    const totalPriceValue = pricePerTicket * numTicketsInt;
    if (!isNaN(totalPriceValue)) {
      setTotalPrice(totalPriceValue);
    } else {
      setTotalPrice(0);
    }
  }, [numTickets, selectedDate, selectedDestination]);

  if (!selectedDestination) {
    return <NotFound />;
  }


  // Function to select number of tickets for purchase
  const handleNumTicketsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setNumTickets(parsedValue.toString());
    } else {
      setNumTickets('');
    }
  };

  // Function to select a preferred date and tme for the tour
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  //paystack payment integration
  const handlePayment = () => {
    const amountInKobo = totalPrice * 100; // Paystack expects the amount in kobo
    const handler = window.PaystackPop.setup({
      key: 'pk_test_dcc7ad8f423b43e79f3aad671484b32eff5e5fcd',
      email: 'dengineer77@gmail.com',
      amount: amountInKobo,
      currency: 'NGN', // Nigerian Naira
      metadata: {
        custom_fields: [
          {
            display_name: 'Destination',
            variable_name: 'destination',
            value: selectedDestination.name,
          },
        ],
      },
      callback: (response: any) => {
        // Payment was successful, function to handle the success event here
        toast.success(`You've successfully purchased ${numTickets} ticket(s) for $${totalPrice} for the ${selectedDestination.name} tour dated ${selectedDate}!. Enjoy your tour!`, {
              position: "top-center",
              autoClose: 6000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
        console.log(response);
      },
      onClose: () => {
        // Payment was canceled or closed, function to handle the close event
        toast.error('Your payment was canceled or unsuccessful');
      },
    });
  
    handler.openIframe(); // Open the Paystack payment iframe
  };

  const handleTicketPurchase = () => {
    if (!numTickets || numTickets === '0') {
      setValidationError('Please enter a valid number of tickets.');
      return;
    }
  
    if (!selectedDate) {
      setValidationError('Please select a tour date and time.');
      return;
    }

    // Validation passed, proceed with the payment
    handlePayment();
  
    setValidationError(null);
  };


  return (
    <>
      <section className="overflow-hidden mt-2">
        <section className="absolute top-6 lg:left-12 left-6">
          <Link to="/main">
            <FaArrowLeft className="text-xl cursor-pointer" />
          </Link>
        </section>
        <section className="container px-5 lg:py-4 -py-10 mx-auto">
          <section className="lg:w-4/5 mx-auto flex flex-wrap">
            <img src={selectedDestination.image} alt={selectedDestination.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
            <article className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <section className="border-b-2 border-gray-100">
                <div className="flex mb-2">
                  <h2 className="text-sm">{selectedDestination.mark}</h2>
                </div>
                <h1 className="lg:text-3xl text-2xl font-semibold mb-1">{selectedDestination.name}</h1>
                <h2 className="text-base mt-1">Location: {selectedDestination.location}</h2>
                <div className="flex mb-4 mt-2">
                  <span className="flex items-center">
                    <FaStar className="w-4 h-4 text-orange-500" />
                    <FaStar className="w-4 h-4 text-orange-500" />
                    <FaStar className="w-4 h-4 text-orange-500" />
                    <FaStar className="w-4 h-4 text-orange-500" />
                    <FaStar className="w-4 h-4 text-orange-500" />
                  </span>
                </div>
                <p className="leading-relaxed mt-8">{selectedDestination.info}
                </p>
                <p className="leading-relaxed">Coordinates: {selectedDestination.coor}
                </p>
                <p className="leading-relaxed mt-3">Tour Ticket Price: {selectedDestination.price}
                </p>
              </section>

              <section className="flex mt-6 items-center pb-5 mb-5">
                <section className="flex flex-col">
                  <div className="flex">
                    <p>Number of Tickets:</p>
                    <input type="number" min="1" value={numTickets} onChange={handleNumTicketsChange} className="ml-2 mb-2 p-1 border-2 border-gray-400 rounded" />
                  </div>

                  <div className="flex my-4">
                    <p>Select Tour Date and Time:</p>
                    <DatePicker selected={selectedDate} onChange={handleDateChange} showTimeSelect className="ml-2 mb-2 p-1 border-2 border-gray-400 rounded" />
                  </div>
                  <p className="text-xl font-semibold my-2">Total Price: ${totalPrice}</p>
                </section>
              </section>
              {validationError && <p className="text-red-500">{validationError}</p>}
              <section className="flex">
                <button
                  // onClick={() => {
                  //   setValidationError(null);
                  //   handleTicketPurchase();
                  // }}
                  onClick={handleTicketPurchase}
                  className="w-full p-4 text-xl bg-brandColor rounded-xl text-white hover:bg-white hover:border-2 hover:border-brandColor hover:text-brandColor">
                  Purchase Ticket(s)
                </button>
              </section>
            </article>
          </section>
        </section>
      </section>
      <ToastContainer />
    </>
  );
};

export default DestinationDetailsPage;
