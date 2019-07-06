import styled from 'styled-components';

import { Heading } from './Heading';

const Label = styled(Heading)`
  color: ${p => p.theme.colors.black};
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;
`;

export { Label };
