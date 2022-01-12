import styled from "styled-components";

export const Label = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0;
  border: none;
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => props.theme.colors.white};
  text-align: left;
  outline: none;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.colors.grey1};
  }
  :focus,
  :active {
    background: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.darkGreen};
  }
`;
