import styled, { css } from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${props => props.isuser ? 'flex-end' : 'flex-start'};
  margin-bottom: 10px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px;
  border-radius: 8px;
  background-color: ${props => props.isuser ? '#DCF8C6' : '#F3F3F3'};
  color: ${props => props.isuser ? '#000000' : '#333333'};

  ${props => props.isuser && css`
    background-color: #DCF8C6;
    color: #000000;
  `}
`;

export const MessageText = styled.p`
  margin: 0;
`;