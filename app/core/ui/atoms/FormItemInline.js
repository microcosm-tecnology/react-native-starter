import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

import { withTheme } from 'app/core/api/themeContext';

class FormItemInline extends PureComponent {
  render() {
    return (
      <Cont>
        <LabelCont>
          <Label>{this.props.label}</Label>
        </LabelCont>
        <View>
          {this.props.children}
        </View>
      </Cont>
    );
  }
}

const Cont = styled(View)`
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = withTheme(styled(Text)`
  font-size: 16px;
  color: ${p => p.isDark ? 'white' : p.theme.colors.black};
`);

const LabelCont = styled(View)`
  flex-grow: 1;
`;

export { FormItemInline };
