import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { IPlayerProps } from '../components/api/getPlayerData';

type PlayerState = {
  players: IPlayerProps[] | null;
  loading: boolean;
  errors: any;
}

const initialState: PlayerState = {
  players: [],
  loading: false,
  errors: null
};
/** 
* Fetching data from the API 
* @param {String, Object} 'players/getPlayers' , callback
* @return {Array<T>} Returns the fetched data
*/
export const getPlayers = createAsyncThunk<IPlayerProps[]>('players/getPlayers', async (_, _thunkApi) => {
  try {
    const response = await axios.get(
      'https://6360055fca0fe3c21aaacc04.mockapi.io/player'
    );
    return response.data;

  } catch (error) {
    return _thunkApi.rejectWithValue(error);
  }

/** 
* Creating the Slicer in order to add actions
* @param {Object} state , object of reducers  
* @return {Object || boolean} Returns state and/or boolean
*/});
export const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<IPlayerProps[]>) => {
      state.players = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPlayers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
      state.loading = false;
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    })
  }
});

export default playerSlice.reducer;
export const { setPlayers } = playerSlice.actions;
