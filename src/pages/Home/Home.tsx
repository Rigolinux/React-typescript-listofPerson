import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "../../data/people";
import { Person } from "@/models";
import { Checkbox}from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, addPeople } from "@/redux/states";
import store, { AppStore } from "@/redux/store";
import { PeopleTable } from "./components";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

	//minuto 2:10:00 del video https://www.youtube.com/watch?v=p9PAmqpCWgA
  const dispatch = useDispatch();

  React.useEffect (() => {

    dispatch(addPeople(People));
  },[]);

  return (
    <PeopleTable />
      
    
  );
};

export default Home;
