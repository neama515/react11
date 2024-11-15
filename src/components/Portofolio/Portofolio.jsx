import React, { useState } from "react";

export default function Portofolio() {
  const [st1, setSt1] = useState("hidden");
  const [st2, setSt2] = useState("hidden");
  const [st3, setSt3] = useState("hidden");
  const func1 = () => {
    setSt1("visible");
  };
  const func2 = () => {
    setSt2("visible");
  };
  const func3 = () => {
    setSt3("visible");
  };
  const func11 = () => {
    setSt1("hidden");
  };
  const func22 = () => {
    setSt2("hidden");
  };
  const func33 = () => {
    setSt3("hidden");
  };
  return (
    <>
      <section className="portofolio container flex flex-col justify-center items-center py-4">
        <h1>PORTOFOLIO COMPONENT</h1>
        <div className="flex justify-center items-center mb-14">
          <span className="w-24 h-1 bg-black flex "></span>
          <i _ngcontent-lqt-c6="" class="fa-solid fa-star px-3"></i>
          <span className="w-24 h-1 bg-black flex"></span>
        </div>
        <div className="cards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="p-3 ">
            <div className="relative">
              <img src="images/poert1.png" className="w-full rounded " alt="" />
              <div
                className="layer flex justify-center items-center absolute right-0 left-0 top-0 bottom-0 rounded"
                onClick={func1}
              >
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative">
              <img src="images/port2.png" className="w-full rounded " alt="" />
              <div
                className="layer flex justify-center items-center absolute right-0 left-0 top-0 bottom-0 rounded"
                onClick={func2}
              >
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative">
              <img src="images/port3.png" className="w-full rounded " alt="" />
              <div
                className="layer flex justify-center items-center absolute right-0 left-0 top-0 bottom-0 rounded"
                onClick={func3}
              >
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="p-3 ">
            <div className="relative">
              <img src="images/poert1.png" className="w-full rounded " alt="" />
              <div
                className="layer flex justify-center items-center absolute right-0 left-0 top-0 bottom-0 rounded"
                onClick={func1}
              >
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative">
              <img src="images/port2.png" className="w-full rounded " alt="" />
              <div
                className="layer flex justify-center items-center absolute right-0 left-0 top-0 bottom-0 rounded "
                onClick={func2}
              >
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative">
              <img src="images/port3.png" className="w-full rounded " alt="" />
              <div
                className="layer flex justify-center items-center absolute right-0 left-0 top-0 bottom-0 rounded"
                onClick={func3}
              >
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`img-layer h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${st1} `}
        onClick={func11}
      >
        <img
          src="images/poert1.png"
          className="w-2/5 rounded "
          alt=""
          onClick={func1}
        />
      </div>
      <div
        className={`img-layer h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${st2} `}
        onClick={func22}
      >
        <img
          src="images/port2.png"
          className="w-2/5 rounded "
          alt=""
          onClick={func2}
        />
      </div>
      <div
        className={`img-layer h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center ${st3} `}
        onClick={func33}
      >
        <img
          src="images/port3.png"
          className="w-2/5 rounded "
          alt=""
          onClick={func3}
        />
      </div>
    </>
  );
}
