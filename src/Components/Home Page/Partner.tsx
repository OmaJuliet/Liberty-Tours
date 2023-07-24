import CompanyLogoScroll from './CompanyLogoScroll';

const Partner = () => {
  const logos = [
    "Images/image 27.png",
    "Images/image 28.png",
    "Images/image 29.png",
    "Images/image 27.png",
    "Images/image 28.png",
    "Images/image 29.png",
    // "Images/image 30.png",
    // "Images/image 31.png",
  ];

  return (
    <div className="lg:pt-8 pt-8 lg:pb-12 pb-8">
      <div className="container mx-auto flex justify-center text-center px-4 mb-10">
        <p className="bg-blue-300 text-brandColor text-lg py-2 px-4 font-semibold rounded-full">Our Clients and partners</p>
      </div>
      <CompanyLogoScroll logos={logos} />
    </div>
  );
};

export default Partner;
