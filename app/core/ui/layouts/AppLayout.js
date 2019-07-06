import React, { PureComponent } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { useScreens } from 'react-native-screens';

import Login from 'app/core/ui/pages/Login';

useScreens();

const AppNavigator = createAppContainer(createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  }
}));

class AppLayout extends PureComponent {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default AppLayout;
