import { PiGreaterThanLight } from "react-icons/pi";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide1 from "../../../assets/Rectangle 202.png";
import slide2 from "../../../assets/Rectangle 203.png";
import slide3 from "../../../assets/Group 374.png";
import slide4 from "../../../assets/Rectangle 205.png";
import slide5 from "../../../assets/Rectangle 206.png";
import slide6 from "../../../assets/Rectangle 207.png";
import { FaPlay } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiScreencastLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoShareOutline } from "react-icons/io5";

import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Md4K } from "react-icons/md";
const movies = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 0 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div className="bg-black text-white ">
      <div className="flex">
        <div className="flex items-center gap-4 px-16">
          <h3 className="text-5xl font-extrabold py-6">Newest releases</h3>
          <div>
            <PiGreaterThanLight className="mt-3" size={50} />
          </div>
        </div>
      </div>
      {/* slider */}
      <div ref={sliderRef} className="keen-slider gap-1">
        <div className="keen-slider__slide number-slide1 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide1}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide2}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 ">
          <div className="relative z-10 mb-12 rounded-3xl  transition-transform duration-300 transform ">
            <img
              src={slide3}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 ">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 ">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide4}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide5}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide6}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide1}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide2}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide3}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide4}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide5}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide6 group">
          <div className="relative z-10 mb-12 rounded-3xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
            <img
              src={slide6}
              alt="Slide"
              className="h-[300px] w-[250px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-to-r from-[#FFFFFF45] to-[#FFFFFF17] rounded-full p-5">
                <FaPlay size={15} />
              </div>
            </div>

            <div className="flex gap-1 flex-col absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <RiPlayList2Fill size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <PiScreencastLight size={20} />
              </button>
              <button className="rounded-full p-3 bg-gradient-to-r from-[#5A0DFF] via-[#FF29B8] to-[#FF581C]">
                <CiHeart size={20} />
              </button>
              <button className="rounded-full p-3 bg-[#F0F0F04D]">
                <IoShareOutline size={20} />
              </button>
            </div>

            <div className="p-1 absolute left-2 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-2xl font-bold text-white">
                The family monkey
              </h4>
              <div className="flex gap-2 items-center font-jost font-semibold normal-case">
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <FaStar className="text-[#D27304]" />
                  <p>9.5</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <IoTime />
                  <p>02h 30m</p>
                </div>
                <div className="flex gap-1 items-center text-[#999999] text-[12px] font-jost">
                  <Md4K />
                  <p>4k Quality</p>
                </div>
              </div>
              <p className="text-[#999999] font-jost">Action, Comedy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default movies;
