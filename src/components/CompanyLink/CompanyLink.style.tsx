import styled from "styled-components";

export const Label = styled.button<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0;
  border: none;
  color: ${(props) =>
    props.isSelected ? props.theme.colors.darkGreen : props.theme.colors.dark};
  background: ${(props) =>
    props.isSelected ? props.theme.colors.green : props.theme.colors.white};
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

export const SelectedIcon = () => <i className="material-icons-outlined">done</i>
