import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Picker } from 'react-native';

class PickerInput extends PureComponent {
  render() {
    return (
      <PickerStyled {...this.props}>
        {this.props.items.map(({ label, value }, i) => (
          <Picker.Item label={label} key={`${label}-${value}-${i}`} value={value} />
        ))}
      </PickerStyled>
    );
  }
}

const PickerStyled = styled(Picker).attrs(p => ({
  itemStyle: {
    color: p.theme.colors.black,
    fontSize: 26
  }
}))`
  margin-bottom: 10px;
  border-width: 0;
`;

export { PickerInput };
