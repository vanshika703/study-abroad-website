import React from "react";
import CardComponenet from "./Card";
import service1 from "../img/service1.svg";
import service2 from "../img/service2.svg";
import service3 from "../img/service3.svg";
import service4 from "../img/service4.svg";
import service5 from "../img/service5.svg";
import service6 from "../img/service6.svg";

const services = [
  {
    img: service1,
    title: "Study Abroad Counselling",
    description:
      "Our experienced counsellors helps students identify a program that perfectly matches both their educational and financial background. ",
    link: "",
  },
  {
    img: service2,
    title: "Course Advice",
    description:
      "Our comprehensive scholarship assistance includes appraising eligibility criteria to guide applicants in the right manner",
    link: "",
  },
  {
    img: service3,
    title: "University / College application processing",
    description:
      "We offer Guidance throughout the entire admission process to ensure a complete, error-free application",
    link: "",
  },
  {
    img: service4,
    title: "Visa Application Assistance",
    description:
      "Our trained and experienced team of counsellors help students identify a course and university that perfectly match.",
    link: "",
  },
  {
    img: service5,
    title: "Scholarship Assistance",
    description:
      "Our comprehensive scholarship assistance includes appraising eligibility criteria to guide applicants in the right manner",
    link: "",
  },
  {
    img: service6,
    title: "Pre Departure Guidance / Support",
    description:
      "We organize pre departure briefing for students to let them know about the do's an don'ts while embarking their studies abroad.",
    link: "",
  },
];

const OurServices = () => {
  return (
    <div className="mx-auto my-16">
      <p className="text-center text-2xl text-[#1e3c5a] font-semibold">
        <span className=" border-l-4 border-[#FDBF00] pl-4">Our Services</span>
      </p>
      <div className="flex flex-wrap justify-center items-start">
        {services?.map((service) => (
          <CardComponenet
            img={service.img}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
