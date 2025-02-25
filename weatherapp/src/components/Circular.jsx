export const Circular = ({ width, height, bgColor }) => {
  return (
    <div
      className={`flex justify-center items-center ${width} ${height} ${bgColor} rounded-full absolute border-[1px] border-solid z-1`}
    ></div>
  );
};
