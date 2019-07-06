import React from 'react';
import styled from 'styled-components';
import { Text as TextAtom } from 'react-native';

export const Text = styled(TextAtom)`
  font-family: ${p => p.theme.font.family.text};
  font-size: ${p => p.theme.font.size.base};
  color: ${p => p.color ? (p.theme.colors[p.color] || p.color) : p.theme.colors.black};
  font-weight: ${p => p.bold ? 700 : 'normal'};
`;
