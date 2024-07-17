import React from "react";
import Card from "../Card";
import phone from "../../assets/phone.png";
import {
  FaCartPlus,
  FaConnectdevelop,
  FaMusic,
  FaTicketAlt,
  FaVoteYea,
} from "react-icons/fa";
import { FaTv } from "react-icons/fa6";

const Features = () => {
  const cardData = [
    {
      heading: "Connect",
      icon: <FaConnectdevelop />,
      paragraph: "Connect with other 2geda user in your neigborhood",
    },
    {
      heading: "Tickets",
      icon: <FaTicketAlt />,
      paragraph: "Buy, sell and promote your event tickets on 2geda ",
    },
    {
      heading: "Commerce",
      icon: <FaCartPlus />,
      paragraph: "Commerce is your marketplace. Buy and sell goods.",
    },
    {
    heading: "Tv",
    icon: <FaTv />,
    paragraph:
      "Movie upload and viewing has been made so easy with 2geda polls",
  },
    {
      heading: "Stereo",
      icon: <FaMusic />,
      paragraph:
        "2geda is your Go-To app when it comes to the best choice of music",
      },
    {
      heading: "Voting",
      icon: <FaVoteYea />,
      paragraph:
        "Creating polls and vote casting has been made simplified on 2geda",
    },
  ];

  return (
    <section className="md:px-16 px-8">
      <div className="">
        <p className="text-purple-700 text-center mt-12 text-[15px] md:text-[18px] font-semibold">
          Our Features
        </p>
        <h2 className="text-center text-[18px] md:text-[28px] font-semibold">Unleash the Power of 2geda</h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-4 md:h-[450px] mt-12 md:mt-2 items-center">
        <div className="md:p-8 md:grid md:grid-cols-2 justify-center gap-2 md:gap-8 w-full md-h-[70%]">
          {cardData.map((card, index) => (
            <Card
              key={index}
              heading={card.heading}
              icon={card.icon}
              paragraph={card.paragraph}
              layout={card.layout}
            />
          ))}
        </div>
        <img
          src={phone}
          className=" h-full ml-16 hidden lg:block"
          alt="phone"
        />
      </div>
    </section>
  );
};

export default Features;
