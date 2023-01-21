import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Cryptochartmodal from './cryptochartmodal';
import detailicon from '../images/detail.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  width: '55%',
  backdropFilter: "blur(5px)",
  
  boxShadow: 24,
  p: 4,
};


export default function Modalbox(charter,name,color) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


   return (
    <div>
         <Button onClick={handleOpen}><img className='detailicon' src={detailicon} alt="Details icon"></img><span>Details</span></Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
          
        {Cryptochartmodal(charter,name,color)}
         </Box>
      </Modal>
    </div>
  );
    
}