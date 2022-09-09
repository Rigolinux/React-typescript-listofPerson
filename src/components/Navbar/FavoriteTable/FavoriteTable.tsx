import { Person } from "@/models";
import { PeopleTableInterface } from "@/pages/Home/components/PeopleTable/PeopleTable";
import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Delete } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const [selectedPeople, setselectedPeople] = React.useState<Person[]>([]);
  const pageSize = 5;

  const dispatch = useDispatch();
  const statefavorite = useSelector((state: AppStore) => state.favorites);
  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person));
	  };
	
  const columns = [
	{
		field: 'actions',
		type: 'actions',
		sortable: false,
		headerName: '',
		width: 50,
		renderCell: (params: GridRenderCellParams) => (
		  <>
			{
			  <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
				<Delete />
			  </IconButton>
			}
		  </>
		)
	  },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={statefavorite}
      columns={columns}
      disableDensitySelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      // id asociado al componente
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
