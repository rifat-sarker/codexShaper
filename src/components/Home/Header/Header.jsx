import Navbar from "../Navbar/Navbar";
import banner from "../../../assets/noisy-background 1.png";
import banner2 from "../../../assets/wallpaperflare 1.png";
import girlPhoto from "../../../assets/file 1.png";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Md4K } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { RiMenuAddFill } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { RiPlayList2Fill } from "react-icons/ri";
import { SiAirplayvideo } from "react-icons/si";
import { PiGameController } from "react-icons/pi";
import { CiFootball } from "react-icons/ci";
import '/src/index.css'

const Header = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute  inset-0 h-screen bg-cover p-6 bg-no-repeat bg-black bg-opacity-40 bg-gradient-to-r from-[#080018] via-[#FF2929] to-[#FFB21C] "
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>

        <div className="relative z-10">
          <Navbar />
          <div className="flex justify-center w-full gap-6 items-center text-white uppercase">
            <div>
              <img className="h-[700px] w-[500px]  " src={girlPhoto} alt="" />
            </div>
            <div>
              <h1 className="font-bold text-8xl py-6">
                The Lord <br />
                of The Rings
              </h1>

              <div className="flex gap-4 items-center font-jost font-semibold normal-case ">
                <div className="flex gap-1 items-center rounded-full  px-6 py-2 text-[#E2E2E2] radial-gradient-bg" style={{background: `radial-gradient(circle, #FFFFFF45 0%, #FFFFFF17 0%)`}}>
                  <FaStar className="size-5" />
                  <p>4.9 Reviews</p>
                </div>
                <div className="flex gap-1 items-center rounded-full  px-6 py-2 text-[#E2E2E2]" style={{background: `radial-gradient(circle, #FFFFFF45 0%, #FFFFFF17 0%)`}}>
                  <IoTime className="size-5" />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center rounded-full  px-6 py-2 text-[#E2E2E2]" style={{background: `radial-gradient(circle, #FFFFFF45 0%, #FFFFFF17 0%)`}}>
                  <Md4K className="size-5" />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="py-4 text-[#999999] font-jost">
                The Lord of the Rings is a trilogy of epic fantasy adventure
                films directed.
              </p>
              <div className="flex gap-4">
                <button className="py-4 px-6 font-bold uppercase rounded-full bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8]  to-[#FF581C]">
                  {" "}
                  <CiPlay1 className="inline mr-3 size-5" />
                  Play Trailer
                </button>
                <button className="py-4 px-6 font-bold border uppercase rounded-full">
                  {" "}
                  <RiMenuAddFill className="inline mr-3 size-5" />
                  Add to List
                </button>
              </div>
            </div>
            <div className="flex relative flex-col gap-4 rounded-full opacity-50  p-3 bg-gradient-to-bl from-[#FFFFFF7D] from-49% via-[#FFFFFF1A] via-10% to-[#FFFFFF1C] to-11%  ">
              <div className="rounded-full p-3 bg-[#F0F0F04D]">
                <BiHomeAlt2 size={20} />
              </div>
              <div className="rounded-full p-3 bg-[#F0F0F04D]">
                <CiSearch size={20}  />
              </div>
              <div className="rounded-full p-3 mb-6 bg-[#F0F0F04D]">
                <HiOutlineVideoCamera size={20} />
              </div>
              <button className="gap-2 items-center flex border border-l-[#5A0DFF] border-t-[#FF29B8] border-b-[#FF29B8] border-r-[#FF581C]   left-[-87px] top-[188px] rounded-full absolute text-sm p-2  font-bold uppercase ">
                {" "}
                Add to Playlist
                <RiPlayList2Fill size={20} className="inline" />
              </button>

              <div className="rounded-full p-3 mt-6 bg-[#F0F0F04D]">
                <SiAirplayvideo size={20} />
              </div>
              <div className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiGameController size={20} />
              </div>
              <div className=" rounded-full p-3 bg-[#F0F0F04D]">
                <CiFootball size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
