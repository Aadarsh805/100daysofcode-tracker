import { createContext, FC, useContext, useState } from "react";
import UserProfile from "../components/UserProfile";

const StateContext = createContext<
  { setProfile: (data: UserProfile) => void } | undefined
>(undefined);


interface UserProfile {
  name: string;
  username: string;
  profile_img: string;
}

export const ContextProvider = ({ children }: any) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    username: "",
    profile_img: "",
  });

  const setProfile = (data: UserProfile) => {
    setUserProfile({
      name: data.name,
      username: data.username,
      profile_img: data.profile_img,
    });
  };

  return (
    <StateContext.Provider value={{ setProfile }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
