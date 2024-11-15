import React from "react";

export default function Home() {
  return (
    <>
      <section className=" text-white home flex flex-col justify-center items-center py-16 ">
        <img src="images/avataaars.svg" alt="" className="w-60 my-4" />
        <h1>START FRAMEWORK</h1>
        <div className="flex justify-center items-center mb-3">
          <span className="w-24 h-1 bg-white flex "></span>
          <i class="fa-solid fa-star px-3"></i>
          <span className="w-24 h-1 bg-white flex"></span>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </section>
    </>
  );
}
