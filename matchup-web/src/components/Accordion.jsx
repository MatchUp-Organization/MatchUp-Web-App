import { useState } from "react";

import "./Accordion.css";

const faqData = [
  {
    question: "How does the platform help athletes connect with coaches?",
    answer: [
      "Our platform offers a comprehensive search and filter system that enables athletes to find coaches based on sport, expertise, and location.<br />",
      "Athletes can reach out directly to coaches, view their profiles, and schedule training sessions or consultations easily.",
    ],
  },
  {
    question: "Is the platform suitable for beginners?",
    answer:
      "Our platform is designed for sports enthusiasts of all levels, from beginners to professionals. It provides access to tailored training sessions, events, and activities that cater to various skill levels, helping beginners learn the basics and allowing advanced users to enhance their skills.",
  },
  {
    question: "How do I ensure my data is secure while using the platform?",
    answer: [
      "We prioritize user security by implementing advanced encryption methods and secure servers.<br />",
      "Additionally, user data is only shared with authorized personnel, ensuring privacy and confidentiality for everyone on our platform.",
    ],
  },
  {
    question: "Can I customize my training sessions or matchups?",
    answer:
      "Absolutely! The platform provides a range of customization options, allowing you to choose the type of training, sport, and level of intensity that fits your goals.",
  },
];

const Accordion = () => {
  const [accordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === index ? -1 : index
    );
  };

  return (
    <div className="container">
      <h1 className="accordion-title">Frequently asked questions</h1>
      <div className="accordion-faq">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className={`faq-item ${accordion === index ? "active" : ""}`}
          >
            <div
              className={`accordion-faq-heading ${accordion === index ? "active" : ""
                }`}
            >
              <h3>{item.question}</h3>
              <div className="verticle">{accordion === index ? "-" : "+"}</div>
            </div>
            <div
              className={`accordion-faq-content ${accordion === index ? "active" : "inactive"
                }`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: Array.isArray(item.answer)
                    ? item.answer.join("<br />")
                    : item.answer,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
