import type { FC } from "react";
import Logo from "./Logo";
import StarUs from "./StarUs";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex w-full justify-between bg-transparent items-center py-8 text-black gap-20 md:gap-0">
      <Logo />
      <StarUs />
    </nav>
  );
};

export default Navbar;
