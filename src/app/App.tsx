import './styles/index.scss';

import { Box } from '@mui/material';

import { AppRouter } from '@/app/providers/Router/AppRouter';

function App() {

  return (
    <Box className='page-content'>
      <AppRouter/>
    </Box>
  );
}

export default App;
