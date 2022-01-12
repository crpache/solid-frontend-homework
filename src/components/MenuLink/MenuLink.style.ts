import styled from "styled-components";

interface props {
  red?: boolean
}
export const Wrapper = styled.button<props>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 4px;
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.red ? props.theme.colors.red : 'inherit'};
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
