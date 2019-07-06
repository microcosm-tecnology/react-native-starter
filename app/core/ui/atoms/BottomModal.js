import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ModalAtom from 'react-native-modal';
import { TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import theme from 'app/core/ui/theme';
import { withTheme } from 'app/core/api/themeContext';

class BottomModal extends PureComponent {
  render() {
    const { onClose, back, ...rest } = this.props;
    return (
      <Modal
        onSwipeComplete={onClose}
        swipeDirection={['down']}
        onBackdropPress={onClose}
        {...rest}
      >
        <ShadowOverlay behavior="padding" keyboardVerticalOffset={-220}>
          <Content>
            {back && (
              <Back onPress={back}>
                <IconBack />
              </Back>
            )}
            <Close onPress={onClose}>
              <IconClose />
            </Close>
            {this.props.children}
          </Content>
        </ShadowOverlay>
      </Modal>
    );
  }
}

const Content = withTheme(styled(p => <LinearGradient
  start={{ x: 0.5, y: 0 }}
  end={{ x: 0.5, y: 1 }}
  colors={p.isDark ? [theme.DARK.gradStart, theme.DARK.gradStop] : ['#ffffff', '#ffffff']}
  {...p}
/>)`
  position: relative;
  padding: 40px 0;
  border-radius: 14px;
`);

const Modal = styled(ModalAtom)`
  margin: 0;
  justify-content: flex-end;
`;

const ShadowOverlay = withTheme(styled(KeyboardAvoidingView)`
  border-radius: 14px;
  box-shadow: ${p => p.isDark ? '0 3px 15px rgba(0, 0, 0, 0.25)' : '0 0 30px rgba(0, 0, 0, 0.1)'};
`);

const Close = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 10px;
`;

const Back = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  left: 10px;
`;

const IconBack = styled(p => <Ionicons name="ios-arrow-back" {...p} />)`
  font-size: 28px;
  padding: 8px;
  color: ${p => p.theme.colors.primary};
`;

const IconClose = styled(p => <Ionicons name="ios-close" {...p} />)`
  font-size: 40px;
  padding: 8px;
  color: ${p => p.theme.colors.primary};
`;

export { BottomModal };
