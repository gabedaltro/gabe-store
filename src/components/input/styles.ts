import styled, { css } from "styled-components";

type InputProps = {
  $error: boolean;
};

export const InputStyled = styled.input<InputProps>`
  background-color: #fff;
  width: 100%;

  &:focus {
    border: 2px solid ${(props) => props.theme.primary};
  }

  ${(props) =>
    props.$error &&
    css`
      border-color: ${props.theme.error};
    `}

  ${(props) =>
    props.$error &&
    css`
      &:focus {
        border-color: ${props.theme.error};
      }
    `}
`;

export const HelperText = styled.span<InputProps>`
  font-size: 10px;
  display: inline-flex;
  margin-top: 3px;

  ${(props) =>
    props.$error &&
    css`
      color: ${props.theme.error};
    `}
`;

export const Label = styled.label`
  font-size: 12px;
  z-index: 1;
  display: inline-flex;
  margin-bottom: 4px;
`;
