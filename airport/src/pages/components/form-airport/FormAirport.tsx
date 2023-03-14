import { Box, FormControl, Paper, TextField, Button, Typography } from '@mui/material';

type Props = {
  selectedRows: any[];
  onSelectedRowsChange: (rows: any[]) => void;
};


export const FormAirport: React.FC<Props> = ({ selectedRows, onSelectedRowsChange}) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: string) => {
    const newRows = selectedRows.map((row) => {
      if (row.id === selectedRows[0].id) {
        return { ...row, [property]: event.target.value };
      }
      return row;
    });
    onSelectedRowsChange(newRows);
  };

  const handleAddRow = () => {
    const newRows = [      ...selectedRows,      {        id: Math.floor(Math.random() * 1000000),        codeAirport: '',        nameAirport: '',        addressAirport: '',      },    ];
    onSelectedRowsChange(newRows);
  };

  const handleDeleteRow = () => {
    const newRows = selectedRows.filter((row) => !selectedRows.find((selectedRow) => selectedRow.id === row.id));
    onSelectedRowsChange(newRows);
  };

  const handleUpdate = () => {
    // Send API request to update selected rows
  };

  const handleCreate = () => {
    // Send API request to create a new row
  };

  return (
    <Box sx={{
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40rem',
        margin: '3rem 0'
        }}>
      <Paper elevation={3} sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%', padding: '3rem 0rem'}}>
        <FormControl sx={{ m: 1, width: '70%', gap: '2rem' }} variant="outlined">

          <TextField id="codeAirport" label="Code Airport" variant="outlined" type="text" value={selectedRows[0]?.codeAirport || ''} onChange={(event) => handleInputChange(event, 'codeAirport')} />
          <TextField id="nameAirport" label="Name Airport" variant="outlined" type="text" value={selectedRows[0]?.nameAirport || ''} onChange={(event) => handleInputChange(event, 'nameAirport')} />
          <TextField id="addressAirport" label="Address Airport" variant="outlined" type="text" value={selectedRows[0]?.addressAirport || ''} onChange={(event) => handleInputChange(event, 'addressAirport')} />

          <Button color="warning" variant="outlined">Update</Button>
          <Button sx={{margin: '.2rem'}} color="success" variant="outlined">Create an Airport</Button>
        </FormControl>
      </Paper>
    </Box>
  );
};
