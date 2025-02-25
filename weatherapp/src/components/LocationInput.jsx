import { IoIosSearch } from "react-icons/io";

export const LocationInput = () => {
  return (
    <div className="absolute flex items-center gap-4 bg-white z-50 rounded-full px-4 py-2 top-10 left-10">
      <IoIosSearch size={25} />
      <input
        className="w-[380px] border-gray-700 outline-none font-bold text-[20px]"
        placeholder="Search..."
      ></input>
    </div>
  );
};
