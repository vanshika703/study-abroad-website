"use client";
import ReactSimplyCarouselExample from "./Carousel";

function Locations() {
  return (
    <div className="my-5">
      <h1 className="text-center text-2xl text-[#1e3c5a] font-semibold my-4 ">
        <span className=" border-l-4 border-[#FDBF00] pl-4">
          Choose your destination!
        </span>
      </h1>
      <ReactSimplyCarouselExample />
    </div>
  );
}

export default Locations;
