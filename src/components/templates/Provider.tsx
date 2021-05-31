import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import themes from '../../styles/themes';

interface ProviderProps {
  children: React.ReactElement | React.ReactNode | Array<React.ReactElement | React.ReactNode>;
}

const Provider = ({ children }: ProviderProps): React.ReactElement => {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
