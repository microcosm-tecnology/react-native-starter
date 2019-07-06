import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import RNRestart from 'react-native-restart';
import { Text, View, TouchableOpacity } from 'react-native';

class ErrorOccured extends PureComponent {
  restart = () => {
    RNRestart.Restart();
  };

  render() {
    return (
      <ErrorCont>
        <Text>Unexpected error occured:(</Text>
        <Text>
          We are already notified, and will solve the issue as soon as possible.
        </Text>
        <TouchableOpacity onPress={this.restart}>
          <Text>Reload the app</Text>
        </TouchableOpacity>
      </ErrorCont>
    );
  }
}

const ErrorCont = styled(View)`
  background: ${props => rgba(props.theme.colors.danger, 0.1)};
  border: ${props => props.theme.general.borderWidth} solid ${props => props.theme.colors.danger};
  margin: 20px;
  padding: 20px;
  text-align: center;
`;

export default ErrorOccured;
