/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import happy from "../Assets/Images/happygirl.png";
import img from "../Assets/Images/transfer.png";
import savings from "../Assets/Images/piggy.png";
import invest from "../Assets/Images/invest.png"
import {FaGooglePlay} from "react-icons/fa"
import {BsApple} from "react-icons/bs"
function Landing() {
  return (
    <div className="px-8 lg:flex  lg:px-0 pt-[50px]">
      <div className="text-white lg:flex lg:flex-col  lg:justify-center pr-12 lg:basis-1/2 font-outfit ">
        <p className="text-Gray text-md mb-3 lg:text-lg">The Modern Way Of Saving Money</p>
        <h1 className="text-3xl lg:leading-[60px] lg:text-[45px] mb-1 leading-[40px] font-bold">
          Invest, Save and Pay in
          <span className="text-3xl lg:text-[45px] font-bold  text-purple"> Dollars</span>
        </h1>
        <p className="text-lg lg:text-xl lg:leading-10 leading-8">
          The easiest way to Save more, Borrow for less and Invest everyday. All
          in one app
        </p>
        <div>
          <div className="mt-7  flex font-poppins">
            <button className="bg-white text-[15px] rounded-full lg:text-lg lg:px-3 lg:py-[10px] py-2 text-bgDark px-2">
                <FaGooglePlay className="inline mr-1"/>
                <span>
                     Playstore
                </span>
            </button>
            <button className="ml-[6px] lg:ml-6 text-[15px] bg-white rounded-full lg:text-lg lg:px-3 lg:py-[10px]   py-2 text-bgDark px-2">
                <BsApple className="inline  mr-1"/>
                <span>
                 Applestore
                </span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:basis-1/2  mt-10  lg:mt-0 flex flex-col items-end ">
        <div className=" bg-Yellow  rounded-3xl flex lg:rounded-[0] lg:rounded-tl-[80px] relative justify-center  w-full lg:w-[90%] h-350px ">
          <img
            className="rounded-3xl"
            src={happy}
            alt="image showing customer "
          />
          <div className="absolute rounded-3xl w-full h-full top-0 bg-Yellowct opacity-50 "></div>

          <div className="absolute lg:top-[100px] top-7 left-[-20px] flex py-[7px] pl-2 pr-3 font-outfit items-center bg-white w-[175px] rounded-full">
            <div className="mr-2">
              <img className="w-[35px]" src={savings} alt="transfer" />
            </div>
            <div className="flex flex-col justify-center pb-1 ">
              <p
                className={`border-b-2 border-Pink pr-3 text-gray-500 text-md `}
              >
                Savings
              </p>
            </div>
          </div>
          <div className="absolute lg:top-[185px]  top-[175px]  right-[-10px] flex py-[7px] pl-2 pr-3 font-outfit items-center bg-white w-[175px] rounded-full">
            <div className="mr-2">
              <img className="w-[35px]" src={img} alt="transfer" />
            </div>
            <div className="flex flex-col justify-center pb-1 ">
              <p
                className={`border-b-2 border-Green pr-3 text-gray-500 text-md `}
              >
                Payments
              </p>
            </div>
          </div>
          <div className="absolute lg:bottom-[100px] bottom-7 left-[-20px] flex py-[7px] pl-2 pr-3 font-outfit items-center bg-white w-[175px] rounded-full">
            <div className="mr-2">
              <img className="w-[35px]" src={invest} alt="transfer" />
            </div>
            <div className="flex flex-col justify-center pb-1 ">
              <p
                className={`border-b-2 border-Blue pr-3 text-gray-500 text-md `}
              >
                Investments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
