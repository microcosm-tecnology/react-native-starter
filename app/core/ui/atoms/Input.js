import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import theme from 'app/core/ui/theme';
import { inputStyles } from 'app/core/ui/mixins';

class Input extends PureComponent {
  render() {
    const { icon } = this.props;
    return (
      <InputCont>
        <InputStyled
          placeholderTextColor={theme.colors.gray.light}
          hasIcon={icon}
          {...this.props}
        />
        {icon && <Icon name={icon} />}
      </InputCont>
    );
  }
}

const InputCont = styled(View)`
  width: 100%;
`;

const InputStyled = styled(TextInput)`
  ${inputStyles}
`;

const Icon = styled(Ionicons)`
  position: absolute;
  font-size: 24px;
  color: ${p => p.theme.colors.black};
  top: 12px;
  left: 14px;
`;

export { Input };
