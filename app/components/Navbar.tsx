import type { FC } from "react";
import Logo from "./Logo";
import StarUs from "./StarUs";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex w-full justify-between items-center py-8 text-black">
      <Logo />
      <StarUs />
    </nav>
  );
};

export default Navbar;
