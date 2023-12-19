import LanguageBox from "../components/LanguageBox";
import LogoHeader from "../components/LogoHeader";
import UserBox from "../components/UserBox";

export default function PrivateHeader() {
  return (
    <div className="w-full bg-main h-[72px] px-[155px] flex items-center justify-between fixed top-0 z-50">
      <LogoHeader />
      <div className="flex items-center gap-4">
        <LanguageBox />
        <UserBox />
      </div>
    </div>
  );
}
