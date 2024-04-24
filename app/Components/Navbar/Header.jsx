import Image from "next/image";
import React from "react";
import { MdHeadphones } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className="bg-[#03484D] flex p-16 h-16 gap-10 items-center">
      <Image src="/Logo.png" alt="logo" width={150} height={100} />
      <div className="flex">
        <select className="select rounded-r-none text-[#ABA3A3] h-10">
          <option disabled selected>
            All categories
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <input
          className="border-l-2 px-2 w-96"
          type="Search for products"
          placeholder="Search for products"
        />
        <p className="h-12  justify-center rounded-r-lg flex items-center bg-[#B6B6B6] text-white w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5 21L17.15 16.65"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>
      <div></div>
      <div className="text-white flex flex-col gap-1 items-start">
        <p>Call Us Now</p>
        <p className="flex items-center gap-2">
          <MdHeadphones />
          +011 5827918
        </p>
        <button>Sign In</button>
      </div>
      <div className="text-3xl text-white">
        <LuUser />
      </div>
      <div className="text-3xl text-white">
        <CiHeart />
      </div>
      <div className="text-3xl text-white relative flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clip-path="url(#clip0_0_668)">
            <path
              d="M9 22.0547C9.55228 22.0547 10 21.607 10 21.0547C10 20.5024 9.55228 20.0547 9 20.0547C8.44772 20.0547 8 20.5024 8 21.0547C8 21.607 8.44772 22.0547 9 22.0547Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 22.0547C20.5523 22.0547 21 21.607 21 21.0547C21 20.5024 20.5523 20.0547 20 20.0547C19.4477 20.0547 19 20.5024 19 21.0547C19 21.607 19.4477 22.0547 20 22.0547Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1.05469H5L7.68 14.4447C7.77144 14.9051 8.02191 15.3187 8.38755 15.613C8.75318 15.9073 9.2107 16.0637 9.68 16.0547L14.54 12.0547L19.4 16.0547C19.8693 16.0637 20.3268 15.9073 20.6925 15.613C21.0581 15.3187 21.3086 14.9051 21.4 14.4447L23 6.05469"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_668">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.0546875)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute -top-2 left-2 h-4 w-4 text-sm text-[#FDDE3B] rounded-full flex justify-center items-center">
          3
        </div>
        <p className="text-base">Cart</p>
      </div>
    </div>
  );
};

export default Header;
