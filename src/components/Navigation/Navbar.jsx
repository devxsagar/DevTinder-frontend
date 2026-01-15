import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconLogout, IconUserFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  return (
    <nav className="w-full text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-3 flex items-center justify-between border border-border mt-4 rounded-4xl">
        {/* Logo */}
        <div className="text-lg md:text-xl font-bold cursor-pointer">
          DevTinder
        </div>

        {/* User Dropdown */}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user.photoUrl} alt="user" />
                <AvatarFallback>{user.firstName.split("")[0]}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-20">
              <DropdownMenuItem className="cursor-pointer">
                <IconUserFilled />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600">
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
