import { Link, useLocation, useNavigate } from "react-router-dom";
import IcTooltip from "../../assets/icons/IcTooltip";
import { User } from "../../assets/images";
import IcUser from "../../assets/icons/IcUser";
import keycloakService from "../../configs/keycloakService";
import colors from "../../common/colors";

interface Props {
  className?: string;
  color?: string;
}

export default function UserBox({ className, color = colors.white }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLogin = keycloakService.isLoggedIn();
  const handleLogin = () => {
    keycloakService.doLogin();
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
    keycloakService.doLogout();
  };
  return (
    <div className="flex items-center gap-1 cursor-pointer relative group">
      <div className="w-12 h-12 rounded-1/2 flex items-center justify-center">
        {pathname.includes("quan-ly") ? (
          <img src={User} alt="" className="w-12 h-12 rounded-1/2" />
        ) : (
          <IcUser color={color} />
        )}
      </div>
      <div className="text-base sm:text-white font-medium line-clamp-1 flex items-center gap-1 ">
        {pathname.includes("quan-ly") && "Nguyễn Cường Phong"}
        <IcTooltip />
      </div>

      <div
        className={
          "absolute top-full min-w-full shadow-medium bg-whiteFAFAFA rounded-md group-hover:flex flex-col hidden overflow-hidden z-max " +
          className
        }
      >
        {isLogin ? (
          <>
            <Link
              to={"/quan-ly/banner"}
              className="py-1 px-2 text-base text-main hover:bg-hover"
            >
              Quản lý
            </Link>
            <div
              onClick={handleLogout}
              className="py-1 px-2 text-base text-main hover:bg-hover"
            >
              Đăng xuất
            </div>
          </>
        ) : (
          <>
            <div
              onClick={handleLogin}
              className="py-1 px-2 text-base text-main hover:bg-hover"
            >
              Đăng nhập
            </div>
          </>
        )}
      </div>
    </div>
  );
}
