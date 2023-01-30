import { create } from 'zustand'
import { persist } from 'zustand/middleware'
// Persist store the value in local storage so if it's needed tell me so i will add it

interface Person {
    name: string
}

interface StoreValues {
    dates: any[],
    tweets: any[],
    username: string,
    userProfile: Person
}

const useTweetStore = create<StoreValues>((set, get) => ({
    // by using get u can get the values from state or the whole state but the set function receives a second parameter as a function which is use to get the previous state 
    //  set(state => ({...state, username: newUsername}))
    dates: [],
    tweets: [],
    username: "",
    userProfile: { name: "Somidh" },

    // This is an example, u can remove this below function 
    userName: (name: string) => {
        set({
            username: name
        })
    }
}))


export default useTweetStore