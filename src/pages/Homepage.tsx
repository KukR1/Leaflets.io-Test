import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import {
  Box,
  CircularProgress,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import Dropdown from '../components/dropdown/Dropdown';
import ButtonNext from '../components/button/ButtonNext';

const Homepage = () => {
  const [state, setState] = useState('');

  const { players } = useAppSelector((state) => state.players);
  const loading = useAppSelector((state) => state.players.loading);
  let navigate = useNavigate();

  const handleChange = (e: SelectChangeEvent<string>) => {
    setState(e.target.value);
  };

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
      {loading && (
        <CircularProgress size={100} sx={{ color: 'primary.contrastText' }} />
      )}
      {!loading && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Dropdown value={state} label="Players" onChange={handleChange}>
            {players?.map((player) => {
              return (
                <MenuItem key={player.id} value={player.name}>
                  {player.name}
                </MenuItem>
              );
            })}
          </Dropdown>
          <ButtonNext
            onClick={() => {
              navigate('/next');
            }}
            text="Next >"
          />
        </Box>
      )}
    </Box>
  );
};

export default Homepage;
