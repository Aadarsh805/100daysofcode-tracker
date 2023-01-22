import Image from "next/image";
import Page from "./dashboard/page";

export default function Home() {
  return (
    <div className="h-screen">
      <nav className="flex justify-between items-center bg-[#312E47] p-5">
        <h1>#100DaysOfCode</h1>
        <p>Star Us</p>
      </nav>
      <Page />
    </div>
  );
}
