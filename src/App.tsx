import { useCallback, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from './components/layout/Layout';
import Homepage from './pages/Homepage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import NextPage from './pages/NextPage';
import { getPlayers } from './store/playerSlice';
import { useAppDispatch } from './store/store';

const queryClient = new QueryClient();

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getPlayers());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/next" element={<NextPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
