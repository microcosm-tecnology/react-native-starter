import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ModalAtom from 'react-native-modal';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { vw } from 'app/core/ui/helpers';

class PopupModal extends PureComponent {
  render() {
    const { onClose, ...rest } = this.props;
    return (
      <Modal
        onSwipeComplete={onClose}
        animationIn="zoomIn"
        animationOut="zoomOut"
        swipeDirection={['up', 'down', 'left', 'right']}
        onBackdropPress={onClose}
        {...rest}
      >
        <ShadowOverlay>
          <Content>
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

const Content = styled(View)`
  position: relative;
  padding: 40px ${p => p.theme.general.mainPadding} ${p => p.theme.general.mainPadding};
  border-radius: 14px;
  width: ${80 * vw};
`;

const Modal = styled(ModalAtom)`
  justify-content: center;
  align-items: center;
`;

const ShadowOverlay = styled(View)`
  border-radius: 14px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const Close = styled(TouchableOpacity)`
  position: absolute;
  top: 4px;
  right: 14px;
`;

const IconClose = styled(p => <Ionicons name="ios-close" {...p} />)`
  font-size: 40px;
  color: ${p => p.theme.colors.primary};
`;

export { PopupModal };
