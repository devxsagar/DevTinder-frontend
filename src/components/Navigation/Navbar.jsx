import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconLogout, IconUserFilled } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="w-full text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-3 flex items-center justify-between border border-border mt-4 rounded-4xl">
        {/* Logo */}
        <div className="text-lg md:text-xl font-bold cursor-pointer">DevTinder</div>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/150" alt="user" />
              <AvatarFallback>U</AvatarFallback>
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
      </div>
    </nav>
  );
};

export default Navbar;
