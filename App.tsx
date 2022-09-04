import React from 'react';
import Routes from './src/navigation/routes';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/global/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
