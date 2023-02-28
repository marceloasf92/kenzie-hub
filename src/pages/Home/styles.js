import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  min-width: 300px;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  padding: 20px 0;

  section {
    height: 131px;
    padding: 35px 12px;
    color: var(--grey-0);
    width: 100%;

    h2 {
      margin-bottom: 10px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
    }
    p {
      color: var(--grey-1);
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
    }
  }

  @media (min-width: 768px) {
    section {
      display: flex;
      justify-content: space-between;

      h2 {
        margin-bottom: 0;
      }

      p {
        margin-top: 5px;
      }
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div:first-child {
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: var(--grey-0);
    margin: 0 12px;

    h3 {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
    }

    button {
      width: 32px;
      height: 32px;
      background-color: var(--grey-3);
      border: 1px solid var(--grey-3);
      border-radius: 4px;
      color: var(--grey-0);

      svg {
        margin-top: 4px;
      }
    }

    button:hover {
      background-color: var(--grey-2);
      border-color: var(--grey-2);
    }
  }

  ul {
    max-height: 250px;
    overflow-y: scroll;
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 0;
    list-style: none;
    margin: 0 12px;

    .empty {
      display: flex;
      justify-content: center;
      opacity: 0.5;
      width: 95%;
      margin-bottom: 20px;

      p {
        height: 25px;
        background-color: var(--grey-0);
        width: 95%;
        opacity: 0.1;
      }
    }
  }

  ul::-webkit-scrollbar {
    width: 0;
  }
`;
