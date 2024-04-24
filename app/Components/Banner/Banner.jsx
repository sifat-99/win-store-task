
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      {/* <div className="relative">
        <img src="/Background.png" className="h-[343px]" alt="banner" />
        <p
          style={{
            background: "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
            lineHeight: "normal",
          }}
          className="absolute top-8 right-40 w-[143px] h-[143px] text-center text-white rounded-full bg-black text-[47px] flex items-center"
        >
          40% Off
        </p>
      </div>
      <div className="absolute top-6 left-10">
        <p className="text-black text-[57px]">
          Shop{" "}
          <span className="text-[#0AAEB9]">
            Computer <br /> & experience
          </span>
        </p>
        <p className="">
          You cannot inspect quality into the product; it is already there.{" "}
          <br /> I am not a product of my circumstances. I am a product of{" "}
          <br /> my decisions.
        </p>
        <button className="bg-[#14B1F0] px-10 py-4 rounded-md">
          View More
        </button>
      </div> */}
      <Image src="/Banner.png" alt="banner" width={1400} height={400} />
    </div>
  );
};

export default Banner;
