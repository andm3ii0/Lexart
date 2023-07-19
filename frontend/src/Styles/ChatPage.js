import styled from 'styled-components';

export const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;

  /* Opcional: Estilize a barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
