import React, { useState } from "react";

export default function Contact() {
  const [userN, setUserN] = useState("translate-y-14");
  const [userA, setUserA] = useState("translate-y-14");
  const [userE, setUserE] = useState("translate-y-14");
  const [userP, setUserP] = useState("translate-y-14");
  const onkeyup1 = (e) => {
    if (e.target.value == 0) {
      setUserN("translate-y-14");
    } else {
      setUserN(" translate-y-0 ");
    }
  };
  const onkeyup2 = (e) => {
    if (e.target.value == 0) {
      setUserA("translate-y-14");
      console.log("e");
    } else {
      setUserA(" translate-y-0 ");
    }
  };
  const onkeyup3 = (e) => {
    if (e.target.value == 0) {
      setUserE(" translate-y-14");
      console.log("e");
    } else {
      setUserE(" translate-y-0 ");
    }
  };
  const onkeyup4 = (e) => {
    if (e.target.value == 0) {
      setUserP(" translate-y-14");
      console.log("e");
    } else {
      setUserP(" translate-y-0 ");
    }
  };
  return (
    <>
      <section className="contact container flex flex-col justify-center items-center py-4">
        <h1>CONTACT SECTION</h1>
        <div className="flex justify-center items-center mb-14">
          <span className="w-24 h-1 bg-black flex "></span>
          <i _ngcontent-lqt-c6="" class="fa-solid fa-star px-3"></i>
          <span className="w-24 h-1 bg-black flex"></span>
        </div>
        <label htmlFor="userName" className={`w-3/5	  ${userN}`}>
          userName:
        </label>
        <input
          id="userName"
          type="text"
          placeholder="userName"
          className="w-3/5 border-b-2 rounded p-3  outline-none"
          onKeyUp={onkeyup1}
        />
        <label htmlFor="userAge" className={`w-3/5	my-2 ${userA}`}>
          userAge:
        </label>

        <input
          type="text"
          placeholder="userAge"
          className="w-3/5 border-b-2 rounded p-3 my-2 outline-none"
          onKeyUp={onkeyup2}
        />
        <label htmlFor="userEmail" className={`w-3/5	 ${userE}`}>
          userEmail:
        </label>

        <input
          type="email"
          placeholder="userEmail"
          className="w-3/5 border-b-2 rounded p-3 my-2 outline-none"
          onKeyUp={onkeyup3}
        />
        <label htmlFor="userPassword" className={`w-3/5	 ${userP}`}>
          userPassword:
        </label>

        <input
          type="password"
          placeholder="userPassword"
          className="w-3/5 border-b-2 rounded p-3 my-2 outline-none"
          onKeyUp={onkeyup4}
        />
        <div className="w-3/5">
          <button className="self-start my-2">Send Message</button>
        </div>
      </section>
    </>
  );
}
