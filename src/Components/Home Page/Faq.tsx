import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Question } from './Question';
import "../../Styles/Home Page/faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <>
      <div className="accordion-style" id="faq">
        {/* <h2 className="accordion-heading">Frequently Asked Questions</h2> */}
        <section className="container mx-auto flex justify-center text-center px-4 lg:ml-36 lg:mb-8 md:mb-4 mb-1">
          <p className="bg-blue-200 text-brandColor text-lg py-2 px-4 font-semibold rounded-full">Frequently Asked Questions</p>
        </section>
        <div className="accordion-container">
          {Question.map((item: FAQItem, index: number) => (
            <React.Fragment key={index}>
              <div className="accordion-item" onClick={() => toggle(index)}>
                <h1 className="accordion-question">{item.question}</h1>
                <span className="accordion-icon">
                  {clicked === index ? <FaAngleUp/> : <FaAngleDown />}
                </span>
              </div>
              {clicked === index && (
                <div className="accordion-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
