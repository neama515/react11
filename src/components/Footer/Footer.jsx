import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" text-white ">
        <div className="grid py-16 grid-cols-3">
          <div className="start flex flex-col justify-center items-center">
            <h5>LOCATION</h5>
            <p>2215 John Daniel Drive </p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="mid flex flex-col justify-center items-center">
            <h5>AROUND THE WEB</h5>
            <ul className="flex p-0">
              <li>
                <i
                  _ngcontent-std-c21=""
                  class="fa-brands fa-facebook mx-1 icon"
                ></i>
              </li>
              <li>
                <i
                  _ngcontent-std-c21=""
                  class="fa-brands fa-twitter mx-1 icon"
                ></i>
              </li>
              <li>
                <i
                  _ngcontent-std-c21=""
                  class="fa-brands fa-linkedin-in mx-1 icon"
                ></i>
              </li>
              <li>
                <i
                  _ngcontent-std-c21=""
                  class="fa-solid fa-globe mx-1 icon"
                ></i>
              </li>
            </ul>
          </div>
          <div className="end flex flex-col justify-center items-center">
            <h5>ABOUT FREELANCE</h5>
            <p className="w-10/12 text-center">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="bottom py-3">
          <p className="text-center m-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
