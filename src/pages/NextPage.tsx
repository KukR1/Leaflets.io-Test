import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonNext from '../components/button/ButtonNext';

const NextPage = () => {
  let navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ButtonNext
        onClick={() => {
          navigate('/');
        }}
        text="< Back"
      />
    </Box>
  );
};

export default NextPage;
