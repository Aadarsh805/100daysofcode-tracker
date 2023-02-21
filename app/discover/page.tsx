import React, { FormEvent } from "react";
import Navbar from "../components/Navbar";
import Profile from "./Profile";

const page = () => {
  // const { userProfile } = useTweetStore((state) => ({
  //   userProfile: state.userProfile,
  // }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
      <div className=" w-[70%] h-[80vh] border-2 border-black mx-auto mt-20 flex flex-col gap-5 justify-start p-5 overflow-x-scroll">
        <h1 className="text-3xl font-bold">All Users</h1>
        <div>
          <form>
            <input
              className="w-full border-2 p-2 "
              type="text"
              placeholder="Search"
            />
          </form>

          <div className="">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>
        </div>
      </div>
  );
};

export default page;
