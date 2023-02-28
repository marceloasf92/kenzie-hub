import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  height: 60px;
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--grey-0);

  #errorContainer {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    color: var(--grey-0);
    width: 90%;

    span {
      color: ${(props) => props.isErrored && "var(--color-negative)"};
    }
  }

  .css-1okebmr-indicatorSeparator {
    display: none;
  }
`;
