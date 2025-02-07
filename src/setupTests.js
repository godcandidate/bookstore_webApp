import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';

// Create a custom render function that includes providers
import { render } from '@testing-library/react';

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
