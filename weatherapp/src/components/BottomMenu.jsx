import { CiHome, CiLocationOn, CiHeart, CiUser } from "react-icons/ci";
export const BottomMenu = ({ className, color }) => {
  return (
    <div className={className}>
      <CiHome size={25} color={color} />
      <CiLocationOn size={25} color={color} />
      <CiHeart size={25} color={color} />
      <CiUser size={25} color={color} />
    </div>
  );
};
