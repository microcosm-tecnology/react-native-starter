import { Heading } from 'app/core/ui/atoms/Heading';
import styled from 'styled-components';

export const ModalHeading = styled(Heading)`
  text-align: center;
  margin-top: 7px;
  font-size: 16px;
  color: ${p => p.theme.colors.gray.dark};
`;
