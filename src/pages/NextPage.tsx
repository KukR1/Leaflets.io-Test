import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonNext from '../components/button/ButtonNext';
import { useAppSelector } from '../store/store';

const NextPage = () => {
  let navigate = useNavigate();
  const { players } = useAppSelector((state) => state.players);

  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        gap: '1rem',
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
      <ButtonNext
        onClick={() => {
          console.log('Showing data: ', players);
        }}
        text="Show data in console >"
      />
    </Box>
  );
};

export default NextPage;
