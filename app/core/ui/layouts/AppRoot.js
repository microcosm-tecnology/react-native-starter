import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import theme from 'app/core/ui/theme';
import AppLayout from 'app/core/ui/layouts/AppLayout';
import { StoreProvider } from 'app/core/api/store/provider';

class AppRoot extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <StatusBar barStyle="light-content" />
          <AppLayout />
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default AppRoot;
