import styled from 'styled-components';

export const ChatPageScrem = styled.div`
  display: flex;
  width: 410px;
  height: 100vh;
  margin: 0 auto;
`;

export const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
  border: 10px solid black;
  border-radius: 12px;
`;

export const Content = styled.div`
flex-grow: 1;
overflow-y: auto;

/* Opcional: Estilize a barra de rolagem */
&::-webkit-scrollbar {
  width: 4px;
  background-color: #f4f4f4;
}

&::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

&::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
`;