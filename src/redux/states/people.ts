

import { LocalStorageTypes, Person } from "@/models";
import { getlocalStorage, setlocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";


// video 1:41:18 del video https://www.youtube.com/watch?v=p9PAmqpCWgA
const initialState:Person[]= []




export const peopleSlice = createSlice({
    name: LocalStorageTypes.PEOPLE,
    initialState: getlocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getlocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setlocalStorage(LocalStorageTypes.PEOPLE, state);
            return action.payload;
        },
        
    }
});

export const { addPeople } = peopleSlice.actions;