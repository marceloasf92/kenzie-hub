import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 290px;
  min-height: 100vh;
`;

export const ContainerHeader = styled.div`
  max-width: 370px;
  width: 100%;
  max-height: 800px;
  padding: 50px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  margin: 0 10px;
  height: 600px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    #title {
      padding: 33px 0 17px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin-bottom: 22px;
        color: var(--grey-0);
        font-size: 18px;
      }

      span {
        color: var(--grey-1);
        font-size: 10px;
      }
    }

    button {
      width: 90%;
      height: 40px;
      background-color: var(--color-primary-negative);
      border: 1px solid var(--color-primary-negative);
      border-radius: 4px;
      color: var(--grey-0);
      font-size: 12px;
      transition: 0.5s;
    }

    button:hover {
      background-color: var(--grey-1);
      border-color: var(--grey-1);
    }
  }
`;
