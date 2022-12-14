import axios from 'axios';

export type IPlayerProps = {
  id: string;
  name: string;
};

export const getPlayerData = async (): Promise<IPlayerProps[]> => {
  const response = await axios.get(
    `https://6360055fca0fe3c21aaacc04.mockapi.io/player`
  );

  return response.data;
}


