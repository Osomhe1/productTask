import React from "react";
import Box from "../Box";
import { FaEnvelope } from "react-icons/fa";
import { FaHeadset, FaPhone } from "react-icons/fa6";

const Contact = () => {
  const boxData = [
    {
      icon: <FaEnvelope />,
      heading: "Email Us",
      paragraph: "Reach out to us for enquiries or assistance.",
      action: "mailto:support@2geda.net",
    },
    {
      icon: <FaPhone />,
      heading: "Customer Support",
      paragraph: "Message or call us for assistance",
      action: "tel:+2348132912188",
    },
    {
      icon: <FaHeadset />,
      heading: "2geda assistant",
      paragraph: "Emeka is available for your support.",
      action: "Contact Emeka",
    },
  ];

  return (
    <div className="contact" style={{ textAlign: "left", color: "black" }}>
      <div className="why">
        <p className="text-[#4b0289] md:text-[19px] text-[16px] font-semibold">
          Contact us
        </p>
        <h2 className="md:text-[24px] font-semibold text-[19px]">We are ready to help</h2>
      </div>
      <div className="boxCard">
        {boxData.map((box, index) => (
          <Box
            key={index}
            heading={box.heading}
            icon={box.icon}
            paragraph={box.paragraph}
            action={
              box.action.startsWith("mailto:") ||
              box.action.startsWith("tel:") ? (
                <a href={box.action} style={{ color: "black", marginLeft: "-1px"  }}>
                  {box.action}
                </a>
              ) : (
                <span style={{ color: "black" }}>{box.action}</span>
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
