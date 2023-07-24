import React, { useEffect, useState, useRef } from 'react';
import "../../Styles/Home Page/companies.css";

const CompanyLogoScroll = ({ logos }: { logos: string[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setContainerWidth(container.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevScrollPosition) =>
        (prevScrollPosition + 1) % (containerWidth + 1)
      );
    }, 20);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [containerWidth]);

  return (
    <div className="company-logo-scroll-container" ref={scrollContainerRef}>
      <div
        className="company-logo-scroll-content"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {logos.map((logo, index) => (
          <img key={index} className="company-logo" src={logo} alt={`Logo ${index}`} />
        ))}
        {logos.map((logo, index) => (
          <img key={index} className="company-logo" src={logo} alt={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogoScroll;
