import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ModalAtom from 'react-native-modal';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { vw, vh } from 'app/core/ui/helpers';

class FullScreenModal extends PureComponent {
  render() {
    const { onClose, back, ...rest } = this.props;
    return (
      <Modal
        onSwipeComplete={onClose}
        swipeDirection={[]}
        onBackdropPress={onClose}
        {...rest}
      >
        <ShadowOverlay behavior="padding" keyboardVerticalOffset={-220}>
          <Content>
            <SafeView>
              <Close onPress={onClose}>
                <IconClose />
              </Close>
              {this.props.children}
            </SafeView>
          </Content>
        </ShadowOverlay>
      </Modal>
    );
  }
}

const Content = styled(View)`
  position: relative;
  flex: 1;
  padding: 40px 0;
  background: white;
  border-radius: 14px;
`;

const SafeView = styled(SafeAreaView)`
  position: relative;
  flex: 1;
`;

const Modal = styled(ModalAtom)`
  margin: 0;
  justify-content: flex-end;
`;

const ShadowOverlay = styled(KeyboardAvoidingView)`
  position: relative;
  width: ${100 * vw};
  height: ${100 * vh};
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const Close = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 15px;
  z-index: 2;
`;

const IconClose = styled(p => <Ionicons name="ios-close" {...p} />)`
  font-size: 45px;
  padding: 5px;
  color: ${p => p.theme.colors.primary};
`;

export { FullScreenModal };
