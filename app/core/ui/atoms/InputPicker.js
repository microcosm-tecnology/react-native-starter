import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, Picker, View, Text } from 'react-native';

import { BottomModal } from './BottomModal';
import { Button } from './Button';
import { inputStyles } from 'app/core/ui/mixins';

class InputPicker extends PureComponent {
  state = {
    focused: false,
    value: ''
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.value) {
      return { value: nextProps.selectedValue };
    }
    return null;
  }

  onShow = () => this.setState({ focused: true });

  onClose = () => this.setState({ focused: false });

  onValueChange = value => {
    this.setState({ value });
    this.props.onSave(value);
  };

  render() {
    const { inlineForm, selectedValue, headingText, actionText, items } = this.props;
    const { focused, value } = this.state;
    return (
      <>
        <TouchableWithoutFeedback onPress={this.onShow}>
          <PseudoInput inlineForm={inlineForm}>
            {(items.find(i => i.value === selectedValue) || {}).label}
          </PseudoInput>
        </TouchableWithoutFeedback>
        <BottomModal
          isVisible={focused}
          onClose={this.onClose}
        >
          <ModalHeading>{headingText}</ModalHeading>
          <PickerStyled
            onValueChange={this.onValueChange}
            selectedValue={value}
          >
            {items.map(({ label, value }, i) => (
              <Picker.Item label={label} key={`${label}-${value}-${i}`} value={value} />
            ))}
          </PickerStyled>
          <ButtonCont>
            <Button onPress={this.onClose}>
              {actionText}
            </Button>
          </ButtonCont>
        </BottomModal>
      </>
    )
  }
}

const ButtonCont = styled(View)`
  padding: 0 ${p => p.theme.general.mainPadding};
`;

const PickerStyled = styled(Picker).attrs(p => ({
  itemStyle: {
    color: p.theme.colors.black,
    fontSize: 26
  }
})`
  margin-bottom: 10px;
  border-width: 0;
`);

const PseudoInput = styled(Text)`
  ${inputStyles}
`;

export { InputPicker };
