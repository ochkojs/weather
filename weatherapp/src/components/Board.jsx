import { BottomMenu } from ".";
import { CiLocationOn } from "react-icons/ci";
import { LinearGradient } from "react-text-gradients";

export const Board = ({ backColor, isDay }) => {
  return (
    <div
      className={`flex flex-col justify-between w-[414px] h-[832px] ${backColor} ${isDay} rounded-[48px] p-12 z-40`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className={`text-[18px] z-50 ${
              isDay == "true" ? "text-black" : "text-[#9CA3AF]"
            }`}
          >
            September 10, 2021
          </p>
          <h1
            className={`text-[40px] z-50 ${
              isDay == "true" ? "text-black" : "text-white"
            } font-manrope font-bold`}
          >
            Ulaanbaatar
          </h1>
        </div>
        <CiLocationOn
          size={30}
          color={`${isDay == "true" ? "black" : "white"}`}
        />
      </div>

      <div className="absolute w-[250px] h-[250px] justify-center items-center)"></div>

      <div className="">
        <img
          className=""
          src={`${isDay == "true" ? "./day.png" : "./night.png"}`}
        ></img>
      </div>

      <p
        className={`text-9xl font-bold ${
          isDay == "true" ? "text-black" : "text-white"
        }`}
      >
        <LinearGradient
          gradient={
            isDay == "true"
              ? ["to bottom", "#111827, #6B7280"]
              : ["to bottom", "#F9FAFB, #111827"]
          }
        >
          {isDay == "true" ? "26°" : "17°"}
        </LinearGradient>
      </p>

      <p
        className={`text-[24px] ${
          isDay == "true" ? "text-[#FF8E27]" : "text-[#777CCE]"
        }  font-bold`}
      >
        {isDay == "true" ? "Bright" : "Clear"}
      </p>

      <div>
        <BottomMenu
          className={`flex justify-between`}
          color={`${isDay == "true" ? "black" : "white"}`}
        ></BottomMenu>
      </div>
    </div>
  );
};
