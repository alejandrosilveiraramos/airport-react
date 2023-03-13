import * as React from 'react';
import{ Box, Fade, Modal } from '@mui/material';
import { FormAirport } from '../components/form-airport/FormAirport';

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
          
              <FormAirport
                    selectedRows={selectedRows}
              />
              
            </Box>
          </Fade>  
        </Modal>
      </React.Fragment>
  );
}