import * as React from 'react';
import{ Box, Fade, Modal, Paper, FormControl, TextField, Button, Typography } from '@mui/material';

interface ChatModalProps {
  open: boolean;
  handleClose: () => void;
  selectedRows: any[];
 
}

export const CreateModalAirport : React.FC<ChatModalProps> = ({ open, handleClose, selectedRows}) => {

  return (
      <React.Fragment>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <Box sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'auto',
              p: 4,
            }}>  
              <Box sx={{
              display: "flex",
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40rem',
              margin: '3rem 0'
              }}>
                  <Paper elevation={3} sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%', padding: '3rem 0rem'}}>
                    <Typography>Complete the form to create a new Airport</Typography>
                    <FormControl sx={{ m: 1, width: '70%', gap: '2rem' }} variant="outlined">
                      <TextField id="outlined-basic" label="Code Airport" variant="outlined" type="text" />
                      <TextField id="outlined-basic" label="Name Airport" variant="outlined" type="text"  />
                      <TextField id="outlined-basic" label="Address Airport" variant="outlined" type="text" />
                      <Button type='submit' color="success" variant="outlined">Create</Button>
                    </FormControl>
                </Paper>
              </Box>
            </Box>
          </Fade>  
        </Modal>
      </React.Fragment>
  );
}