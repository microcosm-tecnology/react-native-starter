import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity, Text } from 'react-native';

class Button extends PureComponent {
  onPress = () => {
    if (this.props.onPress) this.props.onPress();
  };

  render() {
    const { unstyled, huge, ...rest } = this.props;
    return (
      <ButtonCont {...this.props}>
        <ButtonText
          unstyled={unstyled}
          huge={huge}
          {...rest}
          onPress={this.onPress}
        >
          {this.props.children}
        </ButtonText>
      </ButtonCont>
    );
  }
}

const ButtonCont = styled(TouchableOpacity)`
  font-family: ${p => p.theme.font.family.header};
  color: white;
  text-align: center;
  ${p => p.rounded && css`
    border-radius: 100px;
  `}
  ${p => p.outline && css`
    padding: 12px 20px;
    border: 2px solid ${p.theme.colors.primary};
  `}
`;

const ButtonText = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  color: ${p => p.theme.colors.primary};
  ${p => p.huge && css`
    font-size: 24px;
  `}
  ${p => p.outline && css`
    text-align: center;
  `}
`;

export { Button };
