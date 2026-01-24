import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IconLogout,
  IconUser,
  IconUserCheck,
  IconUserFilled,
  IconUserPlus,
} from "@tabler/icons-react";
import {  DEFAULT_PHOTO_URL } from "@/utils/constants";
import { removeUser } from "@/feature/userSlice";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(
        import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        },
      );

      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="w-full text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-3 bg-background flex items-center  justify-between border border-border mt-4 rounded-4xl">
        {/* Logo */}
        <Link to="/" className="text-lg md:text-xl font-bold cursor-pointer">
          <img src={logo} alt="logo" className="w-10 -mt-2 md:w-14" />
        </Link>

        {/* User Dropdown */}
        {user && (
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="object-cover "
                  src={user.photoUrl || DEFAULT_PHOTO_URL}
                  alt="user"
                />
                <AvatarFallback>{user.firstName.split("")[0]}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-20 bg-popover">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <IconUser />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/connections")}
              >
                <IconUserCheck />
                Connections
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/requests")}
              >
                <IconUserPlus />
                Requests
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer text-red-600"
                onClick={handleLogout}
              >
                <IconLogout />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
