import { SafeAreaView } from 'react-navigation';
import { View } from 'react-native';
import styled, { css } from 'styled-components';

export const Page = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${p => p.padded && css`
    padding: ${p.theme.general.mainPadding};
  `}
`;
