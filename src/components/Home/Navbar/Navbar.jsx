import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { RiMenu2Fill } from "react-icons/ri";
import { LuCrown } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 text-[#FFFFFF] p-2">
      <div className="flex gap-4 items-center">
        <SiGoogledisplayandvideo360 className="size-8 " />
        <h2 className="mr-3 font-bold text-3xl">Holaa</h2>
        <div className="rounded-full border p-3 text-[#E2E2E2] border-[#FFFFFF]">
          <RiMenu2Fill />
        </div>
      </div>
      <div className="flex gap-4 items-center ">
        <button className="py-4 px-6 font-bold  uppercase rounded-full bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8]  to-[#FF581C]">
          {" "}
          <LuCrown className="inline mr-3 size-5" />
          Subscribe Now
        </button>
        <div className=" rounded-full p-3 bg-[#F0F0F04D]">
          <IoMdPerson size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
