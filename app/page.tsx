import Image from "next/image";
import Page from "./dashboard/page";
import Search from "./search/page";

export default function Home() {
  return (
    <div className="h-screen">
      <Page />
      {/* <Search /> */}
    </div>
  );
}
