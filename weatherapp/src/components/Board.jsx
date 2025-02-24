export const Board = ({ backColor, isDay }) => {
  return (
    <div
      className={`w-[414px] h-[832px] ${backColor} ${isDay} rounded-[48px] p-12 z-40`}
    >
      <p className={`text-[18px] z-50 ${isDay == "true" ? "text-black" : "text-white"}`}>September 10, 2021</p>
      <h1 className={`text-[40px] z-50 ${isDay == "true" ? "text-black" : "text-white"} font-manrope font-bold`}>Ulaanbaatar</h1>
      <img src={`${isDay == "true" ? "./day.png" : "./night.png"}`}></img>
    </div>
  );
};
