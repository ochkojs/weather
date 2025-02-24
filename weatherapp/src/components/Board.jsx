export const Board = ({ backColor, isDay }) => {
  return (
    <div
      className={`w-[414px] h-[832px] ${backColor} ${isDay} rounded-[48px] p-12 z-50`}
    >
      <p>September 10, 2021</p>
      <h1 className="text-[40px]">Kraków</h1>
      <img src={`${isDay == true ? "./day.png" : "./night.png"}`}></img>
    </div>
  );
};
