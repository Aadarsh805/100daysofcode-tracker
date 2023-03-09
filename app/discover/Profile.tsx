import Image from "next/image";
import Link from "next/link";
import React from "react";
import useTweetStore from "../store/tweetStore";

const Profile = () => {
  // const {userProfile} = useTweetStore(state => ({
  //     userProfile: state.userProfile
  // }))

  return (
    <div className=" w-full flex items-center justify-between mt-10 border-2 p-2 rounded-md ">
      {/* <Image src={userProfile.profile_img} alt="profile_img"  /> */}
      <div className="flex items-center gap-2">
        <p className="border-2 border-black rounded-full w-20 h-20 text-center"></p>
        <div>
          <h1>John Doe</h1>
          <p>Mars, solar system</p>
          <p>something</p>
        </div>
      </div>

      <Link href={'/dashboard'}>Profile</Link>
    </div>
  );
};

export default Profile;