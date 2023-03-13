import { Box, FormControl, Paper, TextField } from '@mui/material';

type Props = {
  selectedRows: any[];
};


export const FormAirport: React.FC<Props> = ({ selectedRows}) => {
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
          <TextField id="outlined-basic" label="Code Airport" variant="outlined" type="text"  value={selectedRows[0]?.codeAirport || ''}/>
          <TextField id="outlined-basic" label="Name Airport" variant="outlined" type="text"  value={selectedRows[0]?.nameAirport || ''} />
          <TextField id="outlined-basic" label="Address Airport" variant="outlined" type="text"  value={selectedRows[0]?.addressAirport || ''} />
          
        </FormControl>
      </Paper>
    </Box>
  );
};
