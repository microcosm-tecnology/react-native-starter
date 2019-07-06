import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

export const Heading = styled(Text)`
  font-weight: 700;
  font-size: ${p => p.theme.font.size[p.level ? `h${p.level}` : 'h4']};
`;
