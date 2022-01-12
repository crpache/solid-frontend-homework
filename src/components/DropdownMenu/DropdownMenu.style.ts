import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.grey3};
  width: 300px;
  padding: 5px 0;
  box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.24);
  border-radius: 8px;
`;

export const Separator = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #eee;
  box-sizing: border-box;
`;