import React, {useState, useEffect} from 'react';

import {Box, Container, IconButton, Typography, Paper, FormControl, TextField, Button } from '@mui/material';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { createAirport, deleteAirport, getAllAirports, updateAirport } from '../../../services/AirportService';
import { AirportData } from '../../../model/AirportData';

export default function DataGridDemo() {



  // set Columns DataGrid --Start
  const columns: GridColDef[] = [
    { field: 'codeAirport', headerName: 'Code', width: 150 },
    { field: 'nameAirport', headerName: 'Name', width: 150, editable: true },
    { field: 'addressAirport', headerName: 'Address', width: 150, editable: true },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => handleDelete(params.row.id)}
          >
          <GridDeleteIcon />
        </IconButton>
     ),
    },
  ];
  // set Columns DataGrid --End

  const [airports, setAirports] = useState<AirportData[]>([]);
  

  // Delete --Start

 
  
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const handleSelectionModelChange = (ids: any) => {
    const selectedRowIds = new Set(ids);
    const selectedRows = airports.filter((row) => selectedRowIds.has(row.codeAirport));
    setSelectedRows(selectedRows);
  };

  const handleDelete = (id: any) => {
    const remainingRows = airports.filter((row) => row.codeAirport !== id);
    setAirports(remainingRows);
    
    deleteAirport(id)
    console.log('Deleted')
    
  };
  // Delete --End
  
  // Read All --Start
  React.useEffect(() => {
    getAllAirports().then((response: any) => {
      const airportsWithIds = response.map((airport: any) => ({
        ...airport,
        id: airport.codeAirport,
      }));
      setAirports(airportsWithIds);
    });
  }, []);
  // Read All --End

  // Create --Start
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    createAirport({
      nameAirport: data.nameAirport.toString(),
      addressAirport: data.addressAirport.toString()
    })
    
  }
  // Create --End

  // Update --Start
  const handleUpdate = (params: any) => {
    const { id, field, value } = params;
    const updatedRow = airports.map((row) => {
      if (row.codeAirport === id) {
        return {
          ...row,
          [field]: value,
        };
      }
      return row;
    });
    setAirports(updatedRow);
    console.log("updatedRow:", updatedRow);
  
    const updatedAirport: AirportData = {
      codeAirport: id,
      nameAirport: field === "nameAirport" ? value : updatedRow.find((row) => row.codeAirport === id)?.nameAirport || "",
      addressAirport: field === "addressAirport" ? value : updatedRow.find((row) => row.codeAirport === id)?.addressAirport || "",
    };
    console.log("updatedAirport:", updatedAirport);
  
    updateAirport(id, updatedAirport)
      .then((response) => {
        console.log(`Updated ${field} for airport ${id} to ${value}`);
      })
      .catch((error) => {
        console.error(`Failed to update ${field} for airport ${id}:`, error);
      });
  };
  
  
  
  // Update --End

  // Open Modal --Start
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);
  // Open Modal --End


  return (
    <React.Fragment>
      <Container sx={{display: "flex", alignItems: 'center', justifyContent: 'center', width: '100vw', flexWrap: 'wrap'}}>
        <Box>
          <Typography variant='h3'>Table of all Airports</Typography>
          <Box sx={{ height: 400, width: '70rem', margin: '1rem 0' }}>
            <DataGrid
              sx={{fontSize: '1.4rem'}}
              rows={airports}
              columns={columns}
              getRowId={(airport) => airport.id}
              onCellEditStop={handleUpdate}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              
            />
            </Box>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '2rem', width: '30%'}}>

          <Paper elevation={3} sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 0rem',
            width: '100%',
            gap: '2rem'}}>

            <form onSubmit={onSubmit} style={{width: '100%', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <FormControl  sx={{ m: 1, width: '70%', gap: '2rem' }} variant="outlined">
                <TextField id="nameAirport" name='nameAirport' label="Name Airport" variant="outlined" type="text" />
                <TextField id="addressAirport" name='addressAirport' label="Address Airport" variant="outlined" type="text"  />
                <Button type='submit' sx={{margin: '.2rem'}} color="success" variant="outlined">Create an Airport</Button>
              </FormControl>
            </form>
          </Paper>

        </Box>
        
      </Container>
    </React.Fragment>
  );
}