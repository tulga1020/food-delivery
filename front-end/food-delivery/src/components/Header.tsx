import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { PineconeLogo } from "./Svg";
import { Bucket } from "./Svg";
import { ProfileLogo } from "./Svg";
const Header = () => {
  return (
    <div className="bg-white w-screen ">
      <div className="max-w-[1280px] flex justify-between mx-auto my-4">
        <button className="flex justify-between w-4/12 items-center">
          <Link href="/">
            <PineconeLogo />
          </Link>
          <div>
            <Link href="/"> Нүүр </Link>
          </div>
          <div> Хоолны цэс </div>
          <div> Хүргэлтийн бүс </div>
        </button>
        <button className="flex w-4/12 items-center">
          <SearchInput />
          <div className="flex gap-2 w-25 h-10 py-2 px-4 items-center ">
            <Bucket />
            <div>Сагс</div>
          </div>
          <div className="flex gap-2 w-25 h-10 py-2 px-4 items-center">
            <ProfileLogo />
            <div>Нэвтрэх</div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Header;
