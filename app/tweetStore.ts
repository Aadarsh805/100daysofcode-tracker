import { create } from "zustand";
import { persist } from "zustand/middleware";
// Persist store the value in local storage so if it's needed tell me so i will add it

interface Person {
  name: string;
  image: string;
}

interface StoreValues {
  dates: string[];
  tweets: { content: unknown; date: any }[];
  username: string;
  userProfile: Person;
  setDates: (value: string[]) => void;
  setTweets: (value: { content: unknown; date: any }[]) => void;
  setUsername: (name: string) => void;
  setUserProfile: ({ name, image }: Person) => void;
}

const useTweetStore = create<StoreValues>((set, get) => ({
  // by using get u can get the values from state or the whole state but the set function receives a second parameter as a function which is use to get the previous state
  //  set(state => ({...state, username: newUsername}))
  dates: [],
  tweets: [],
  username: "",
  userProfile: { name: "", image: "" },

  setDates: (value: string[]) => {
    set({
      dates: value,
    });
  },
  setTweets: (value: { content: unknown; date: any }[]) => {
    set({
      tweets: value,
    });
  },
  setUsername: (name: string) => {
    set({
      username: name,
    });
  },
  setUserProfile: ({ name, image }: Person) => {
    set({
      userProfile: { name, image },
    });
  },
}));

export default useTweetStore;
