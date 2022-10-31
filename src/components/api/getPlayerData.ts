import axios from 'axios';

export type IPlayerProps = {
  id: string;
  name: string;
  avatar: string;
};
export type PlayerProps = IPlayerProps[];

export const getPlayerData = async (): Promise<IPlayerProps[]> => {
  const response = await axios.get(
    `https://6360055fca0fe3c21aaacc04.mockapi.io/player`
  );

  return response.data;
}


