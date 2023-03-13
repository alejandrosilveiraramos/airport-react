import * as React from 'react';

import {Box, Button, Container, IconButton, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { getAllAirports } from '../../../services/AirportService';
import { CreateModalAirport } from '../../create-modal-airport/CreateModalAirport';



export default function DataGridDemo() {

  const handleDelete = (id: any) => {
    const remainingRows = airports.filter((row) => row.id !== id);
    setAirports(remainingRows);
  };
  
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

  const [airports, setAirports] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllAirports().then((response: any) => {
      const airportsWithIds = response.data.map((airport: any) => ({
        ...airport,
        id: airport.codeAirport,
      }));
      setAirports(airportsWithIds);
    });
  }, []);

  const [selectedRows, setSelectedRows] = React.useState<any[]>([]);

  const handleSelectionModelChange = (ids: any) => {
    const selectedRowIds = new Set(ids);
    const selectedRows = airports.filter((row) => selectedRowIds.has(row.id));
    setSelectedRows(selectedRows);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


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
              onRowSelectionModelChange={(selectedRows) => handleSelectionModelChange(selectedRows)}
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

        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '2rem'}}>

          <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '2rem', margin: '2rem', width: '90%'}}>
            <Typography variant='h5'> Create a new Airport</Typography>
            <Button onClick={ handleOpen } color="success" variant="outlined">Create</Button>
          </Paper>
        </Box>
        
      </Container>
      <CreateModalAirport open={open} handleClose={handleClose} selectedRows={selectedRows} />
    </React.Fragment>
  );
}