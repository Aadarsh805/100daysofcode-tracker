import { create } from "zustand";
import { persist } from "zustand/middleware";
// Persist store the value in local storage so if it's needed tell me so i will add it

interface Person {
  name: string;
  username: string;
  profile_img: string;
}

interface StoreValues {
  dates: string[];
  tweets: { content: unknown; date: any }[];
  username: string;
  userProfile: Person;
  loading: boolean;
  count: number;
  dataLoadError: boolean;
  setDates: (value: string[]) => void;
  setTweets: (value: { content: unknown; date: any }[]) => void;
  setUsername: (name: string) => void;
  setUserProfile: ({ name, username, profile_img }: Person) => void;
  setLoading: (value: boolean) => void;
  setCount: (value: number) => void;
  setDataLoadError: (value: boolean) => void;
}

const useTweetStore = create<StoreValues>((set, get) => ({
  // by using get u can get the values from state or the whole state but the set function receives a second parameter as a function which is use to get the previous state
  //  set(state => ({...state, username: newUsername}))
  dates: [],
  tweets: [],
  username: "",
  userProfile: { name: "", profile_img: "", username: "" },
  loading: false,
  count: 1,
  dataLoadError: false,

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
  setUserProfile: ({ name, username, profile_img }: Person) => {
    set({
      userProfile: { name, username, profile_img },
    });
  },
  setCount: (value: number) => {
    set({
      count: value,
    });
  },
  setLoading: (value: boolean) => {
    set({
      loading: value,
    });
  },
  setDataLoadError: (value: boolean) => {
    set({
      dataLoadError: value,
    });
  },
}));

export default useTweetStore;
