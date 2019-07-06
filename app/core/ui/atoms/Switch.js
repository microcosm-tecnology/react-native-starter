import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { View, TouchableOpacity } from 'react-native';

class Switch extends PureComponent {
  render() {
    const { huge, checked, green } = this.props;
    return (
      <SwitchCont {...this.props}>
        <Handle green={green} checked={checked} huge={huge} />
      </SwitchCont>
    );
  }
}

const HEIGHT = 20;
const HUGE_HEIGHT = 28;
const GAP = 3;
const HUGE_WIDTH = 52;
const WIDTH = 40;

const getHeight = huge => huge ? HUGE_HEIGHT : HEIGHT;
const getWidth = huge => huge ? HUGE_WIDTH : WIDTH;

const SwitchCont = styled(View)`
  position: relative;
  width: ${p => getWidth(p.huge)}px;
  border-radius: 100px;
  height: ${p => getHeight(p.huge)};
  ${p => p.green && css`
    background-color: ${p.checked ? p.theme.colors.success : p.theme.colors.gray.lighter};
  `}
`;

const Handle = styled(View)`
  width: ${p => getHeight(p.huge) - GAP * 2};
  height: ${p => getHeight(p.huge) - GAP * 2};
  border-radius: 100px;
  background: white;
  top: ${GAP};
  left: ${p => p.checked ? getWidth(p.huge) - getHeight(p.huge) + GAP : GAP};
`;

export { Switch };
