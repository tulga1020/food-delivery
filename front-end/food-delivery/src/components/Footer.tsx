import {
  Fblogo,
  FoodSvg,
  InstaLogo,
  PineconeLogo,
  PineconeWhite,
  TwitterLogo,
} from "./Svg";
import Link from "next/link";
import { Poppins } from "next/font/google";
export const Footer = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1440px] h-[545px] bg-[#18BA51] relative overflow-hidden">
        <FoodSvg colors="object-contain " />
        <div className="absolute top-32 left-32  w-[1200px] h-80 flex flex-col gap-10 ">
          <div className="mx-auto w-96 flex justify-center gap-4 items-center ">
            <PineconeWhite />
            <div className="bold font-3xl text-white">Food Delivery</div>
          </div>
          <div className="w-full flex  text-white justify-between">
            <div className="text-white text-40">
              <Link href="/home">Нүүр</Link>
            </div>
            <div>
              <Link href="/contact">Холбоо барих</Link>
            </div>
            <div>
              <Link href="/menu">Хоолны цэс</Link>
            </div>
            <div>Үйлчилгээний нөхцөл</div>
            <div>Хүргэлтийн бүс</div>
            <div>Нууцлалын бодлого</div>
          </div>
          <div className="w-full flex justify-center gap-4 items-center">
            <Fblogo />
            <InstaLogo />
            <TwitterLogo />
          </div>
          <div className="w-full border-b-2 border-white"></div>
          <div className="w-full flex flex-col items-center gap-2">
            <div className=" w-fit text-white">© 2024 Pinecone Foods LLC</div>
            <div className="w-fit text-white">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
