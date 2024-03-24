import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
// created by Sohel Rahaman (MERN Stack Developer)

interface PlayerCard {
  id: number;
  name: string;
  totalEvent: string;
  image: string;
  sports: string;
}

interface CardProps {
  playerCard: PlayerCard;
}

interface CardDetailsProps {
  playerCard: PlayerCard;
}

export default function Card({ playerCard }: CardProps) {
  const { isDarkMode } = useContext(MainContext);

  return (
    <>
      <div
        className={`w-auto p-3 ${
          !isDarkMode ? "bg-white" : "bg-[#3B3E47]"
        }  shadow-md rounded-sm duration-500 hover:scale-105 hover:shadow-xl`}
      >
        <a href="#">
          <img
            src={`/assets/images/${playerCard.image}`}
            alt={playerCard.name}
            className="h-[auto] max-w-[100%] object-cover rounded-t-sm"
          />
          <CardDetails playerCard={playerCard} />
        </a>
      </div>
    </>
  );
}

export function CardDetails({ playerCard }: CardDetailsProps) {
  const { isDarkMode } = useContext(MainContext);

  return (
    <>
      <div className="px-0 pb-3 w-full">
        <div
          className={`${
            !isDarkMode ? "text-[#000]" : "text-[white]"
          } mr-3 text-[13px] md:text-[17px] tracking-tight font-[600] py-[10px]`}
        >
          {playerCard.name}
        </div>
        <div
          className={`${
            !isDarkMode ? "bg-[#F7F7F8]" : "bg-[#292B32]"
          } rounded-[2px]`}
        >
          <div className="grid grid-cols-2 p-2">
            <div className="">
              <div
                className={`${
                  !isDarkMode ? "text-[#525965]" : "text-[#DFDFDF]"
                } text-[10px] md:text-[12px]`}
              >
                Total Events
              </div>
              <div
                className={`${
                  !isDarkMode ? "text-[#000]" : "text-[#fff]"
                } text-[10px] md:text-[14px] font-[600]`}
              >
                {playerCard.totalEvent}
              </div>
            </div>
            <div className="ps-4">
              <div
                className={`${
                  !isDarkMode ? "text-[#525965]" : "text-[#DFDFDF]"
                } text-[10px] md:text-[12px]`}
              >
                Sports
              </div>
              <div
                className={`${
                  !isDarkMode ? "text-[#000]" : "text-[#fff]"
                } text-[10px] md:text-[14px] font-[600]`}
              >
                {playerCard.sports}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export let AddvertisementCard = () => {
  const { isDarkMode } = useContext(MainContext);

  return (
    <div
      className={`w-auto h-[100%] p-3 ${
        !isDarkMode ? "bg-white" : "bg-[#3B3E47]"
      } shadow-md rounded-sm duration-500 hover:scale-105 hover:shadow-xl`}
    >
      <a href="#" className="relative">
        <img
          src="/assets/images/ad.png"
          className="max-w-[100%] object-cover rounded-t-sm"
        />
        <div className="absolute flex justify-center items-center bg-[black] text-[13px] text-[white] h-[25px] w-[48px] top-[0px] right-0">
          Ad
        </div>
        <div className="px-0 pb-3 w-full">
          <div
            className={`${
              !isDarkMode ? "text-[#000]" : "text-[#fff]"
            } mr-3 text-[17px] font-[600] pt-[15px] pb-[5px]`}
          >
            Advertisement title
          </div>
          <p
            className={`${
              !isDarkMode ? "text-[#525965]" : "text-[#DFDFDF]"
            }  max-w-[100%] text-[12.8px] text-justify`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </a>
    </div>
  );
};
