import React, { FormEvent } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../dashboard/Sidebar";
import Profile from "./Profile";

const page = () => {
  // const { userProfile } = useTweetStore((state) => ({
  //   userProfile: state.userProfile,
  // }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const profiles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="px-10">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="md:w-[80%] ml-10 shadow-md border p-5 px-10 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Discover people</h1>
            <form>
              <input
                className=" border-2  w-52 px-3 py-1 rounded-md "
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-3">
            {profiles.map((profile, idx) => (
              <Profile key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
