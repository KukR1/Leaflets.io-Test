import { ReactNode } from 'react';
import { Box } from '@mui/material';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        width: '80vw',
        height: '90vh',
        display: 'flex',
        left: '50%',
        top: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </Box>
  );
};
