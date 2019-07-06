import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { View, Text } from 'react-native';

class Loading extends PureComponent {
  render() {
    return (
      <LoadingCont>
        <Text>Loading</Text>
      </LoadingCont>
    )
  }
}

const LoadingCont = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default Loading;
