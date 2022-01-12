import styled from "styled-components";

export const Wrapper = styled.button<{
  red?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 4px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: ${(props) => (props.red ? props.theme.colors.red : "inherit")};
  outline: none;
  :hover {
    background: ${(props) => props.theme.colors.grey1};
  }
  :active {
    background: ${(props) => props.theme.colors.grey2};
  }
`;

export const Label = styled.p`
  margin: 0;
  font-size: 16px;
`;
