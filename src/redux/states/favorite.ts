

import { LocalStorageTypes, Person } from "@/models";
import { getlocalStorage, setlocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";


// video 1:41:18 del video https://www.youtube.com/watch?v=p9PAmqpCWgA
const initialState:Person[]= []




export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: getlocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getlocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        
        addFavorite: (state, action) => {
            setlocalStorage(LocalStorageTypes.FAVORITES, state);
            return action.payload;
        },
        removeFavorite: (state, action) => {
            const filterState = state.filter((person:Person) => person.id !== action.payload.id);
            ;
            return filterState;
        }
    }
});

export const { addFavorite,removeFavorite } = favoriteSlice.actions;