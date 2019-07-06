import { css } from 'styled-components';

export const inputStyles = css`
  width: 100%;
  border-radius: 5px;
  padding: 14px 16px;
  ${p => p.hasIcon && css`
    padding-left: 42px;
  `}
  font-family: ${p => p.theme.font.family.text};
  font-size: 18px;
  color: ${p => p.isDark ? 'white' : p.theme.colors.black};
  background-color: white;
  box-shadow: ${p => p.theme.shadows.level3};
  ${p => p.inlineForm && css`
    background-color: rgba(255, 255, 255, 0);
    padding: 0;
    font-size: 24px;
    font-weight: 600;
  `}
  ${p => p.underline && css`
    padding: 8px 14px 8px 0;
    background: rgba(255, 255, 255, 0);
    box-shadow: none;
    font-weight: 500;
    border-bottom-width: 1px;
    border-bottom-color: ${p => p.error ? p.theme.colors.danger : p.theme.colors.gray.light};
  `}
`;
