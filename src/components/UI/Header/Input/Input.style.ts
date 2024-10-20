import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 10px 0;
`;

interface SInterfaceProps {
  $isError?: boolean;
}

export const StyleInput = styled.input<SInterfaceProps>`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 2px solid var(--disabled-bgc);
  transition: 200ms;
  background-color: transparent;

  &:is(:hover, :focus) {
    border-color: var(--prime-color);
  }

  ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.colors.red};
      color: ${(props) => props.theme.colors.red};
    `}

  @media (max-width: 730px) {
    padding: 10px 12px;

    &:last-child {
      margin-bottom: 40px;
    }
  }
`;

