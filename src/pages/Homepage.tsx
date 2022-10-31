import { useState } from 'react';
import { getPlayerData, IPlayerProps } from '../components/api/getPlayerData';
import {
  Box,
  CircularProgress,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useQuery, UseQueryResult } from 'react-query';
import Dropdown from '../components/dropdown/Dropdown';
import ButtonNext from '../components/button/ButtonNext';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [state, setState] = useState('');
  const { data, status }: UseQueryResult<IPlayerProps[], Error> = useQuery<
    IPlayerProps[],
    Error,
    IPlayerProps[]
  >('players', getPlayerData);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setState(e.target.value);
  };
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
      {status === 'loading' && (
        <CircularProgress size={100} sx={{ color: 'primary.contrastText' }} />
      )}
      {status === 'error' && (
        <Typography color="primary.light">
          Something didn't go well :/
        </Typography>
      )}
      {status === 'success' && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Dropdown value={state} label="Players" onChange={handleChange}>
            {data?.map((player) => {
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
