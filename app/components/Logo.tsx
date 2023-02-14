import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.png";
import type { FC } from "react";

type LogoProps = {};

const Logo: FC<LogoProps> = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className="w-72" />
    </Link>
  );
};

export default Logo;
