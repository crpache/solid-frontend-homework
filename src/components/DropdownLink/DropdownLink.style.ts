import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  margin: 10px;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 8px;

  border-radius: 8px;

  cursor: pointer;

  transition: 100ms background-color;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.grey2};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.grey3};
  }
`;

export const TextWrapper = styled.div`
  text-align: right;
`;

export const Text = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const SubText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.grey6};
`;

export const Icon = styled.i`
  margin-left: 8px;
`;
