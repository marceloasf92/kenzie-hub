import styled from "styled-components";

export const Container = styled.li`
  min-width: 95%;
  min-height: 50px;
  background-color: var(--grey-4);
  border-radius: 4px;
  padding: 0 12px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.5s;

  h4 {
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    color: var(--grey-0);
  }

  span {
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    color: var(--grey-1);
  }

  :hover,
  :focus {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }
`;
