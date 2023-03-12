import { poppins } from "@/public/assets/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTweetStore from "../store/tweetStore";

const Profile = () => {
  // const {userProfile} = useTweetStore(state => ({
  //     userProfile: state.userProfile
  // }))

  return (
    <div className=" w-full flex flex-col 2xl:flex-row items-center justify-between mt-10 border-2 p-2 rounded-md min-w-0 gap-4 ">
      {/* <Image src={userProfile.profile_img} alt="profile_img"  /> */}
      <div className="flex flex-col 2xl:flex-row items-center gap-2">
        <p className="border-2 border-black rounded-full w-20 h-20 text-center"></p>
        <div className={`text-center 2xl:text-start ${poppins.className}`}>
          <h1 className="font-bold text-lg text-[#343434] capitalize">John Doe</h1>
          <p className="text-gray-500 text-sm capitalize">Mars, solar system</p>
          {/* <p>something</p> */}
        </div>
      </div>

      <Link href={"/dashboard"} className={`px-5 py-2 rounded-lg font-medium bg-[#343434] text-white ${poppins.className}`}>
        Profile
      </Link>
    </div>
  );
};

export default Profile;
