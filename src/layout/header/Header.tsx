import IcHome from "../../assets/icons/IcHome";
import IcShoppingCart from "../../assets/icons/IcShoppingCart";
import useClickFocus from "../../hooks/useClickFocus";
import LanguageBox from "../components/LanguageBox";
import LogoHeader from "../components/LogoHeader";
import UserBox from "../components/UserBox";
import MenuMobile from "../menu/MenuMobile";
import NavigationList from "./NavigationList";
export default function Header() {
  const { clickShow, ref, setClickShow } = useClickFocus();
  return (
    <div>
      <div className="w-full bg-main h-[72px] xl:px-[155px] px-5 flex items-center justify-between fixed top-0 z-max">
        <LogoHeader />
        <div className="flex items-center gap-12 ">
          <NavigationList className="sc1800:block hidden" />
          <div className="flex items-center h-[72px] gap-4 cursor-pointer">
            <div className="sm:flex hidden items-center gap-4">
              <div className="flex gap-1 items-center text-white text-base leading-5 font-medium">
                <LanguageBox />
              </div>
              {/* <div className="w-[3px] h-full min-h-[20px] rounded-sm bg-white"></div>
              <div>
                <IcShoppingCart />
              </div> */}
              <div className="w-[3px] h-full min-h-[20px] rounded-sm bg-white"></div>
              <div>
                <UserBox className="w-124" />
              </div>
              <div className=" sc1800:hidden block w-[3px] h-full min-h-[20px] rounded-sm bg-white"></div>
            </div>
            <div
              ref={ref}
              className="sc1800:hidden h-full flex items-center justify-center"
            >
              <IcHome />
              {clickShow && (
                <div className="sc1800:hidden ">
                  <NavigationList className="sc1800:hidden xl:block hidden" />
                  <MenuMobile handleClick={() => setClickShow(false)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
