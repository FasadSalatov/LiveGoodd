import { useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import theme from '@/app/themes';
import App from './app/App';

declare global {
  interface Window {
    Telegram: any;
  }
}

const MainApp = () => {
  useEffect(() => {
    const BackButton = window.Telegram.WebApp.BackButton;

    // Показать кнопку назад

    // Установить обработчик события нажатия на кнопку назад
    BackButton.onClick(() => {
      BackButton.hide();
    });

    return () => {
      BackButton.offClick();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <App />
      </Box>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
);
