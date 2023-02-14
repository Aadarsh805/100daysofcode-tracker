import type { FC } from "react";
import logo from "public/assets/logo.png";
import Image from "next/image";
import StarUs from "./StarUs";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex w-full justify-between items-center px-16 py-8 text-black">
      <Image src={logo} alt="logo" className="w-72" />
      <StarUs />
    </nav>
  );
};

export default Navbar;
