"use client";

import { Card } from "flowbite-react";

function CardComponenet({ img, title, description, link }) {
  return (
    <Card className="max-w-xs border-[1px] border-gray-100 shadow-sm m-10 cursor-pointer transition ease-in-out duration-200 hover:shadow-md ">
      <img
        src={img}
        alt=""
        className="h-28 w-28 object-cover mx-auto rounded-full"
      />
      <h5 className=" text-sm font-semibold tracking-tight text-[#1e3c5a] dark:text-white text-center">
        {title}
      </h5>
      <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      <button className="text-xs text-[#FDBF00] font-semibold">know more &gt;</button>
    </Card>
  );
}

export default CardComponenet;
