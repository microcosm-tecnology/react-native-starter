import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'app/core/ui/atoms/Text';

class RadioButton extends PureComponent {
  onPress = () => {
    const { onChange, value } = this.props;
    onChange(value);
  };

  render() {
    const { selected } = this.props;
    return (
      <Button onPress={this.onPress} selected={selected}>
        <ButtonText selected={selected}>
          {this.props.children}
        </ButtonText>
      </Button>
    );
  }
}

class RadioButtons extends PureComponent {
  render() {
    const { options, selected, onChange, multiple } = this.props;
    return (
      <ButtonsCont>
        {options.map((option, i) => (
          <RadioButton
            key={`${option.value}-${i}`}
            selected={multiple ? selected.includes(option.value) : selected === option.value}
            onChange={onChange}
            value={option.value}
          >
            {option.label}
          </RadioButton>
        ))}
      </ButtonsCont>
    )
  }
}

const ButtonsCont = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled(TouchableOpacity)`
  ${p => p.selected && css`
    box-shadow: ${p => p.theme.shadows.level1};
  `}
`;

const ButtonText = styled(Text)`
  text-align: center;
  color: ${p => p.theme.colors.gray.regular};
  font-weight: 600;
  font-size: 14px;
`;

export { RadioButtons };
