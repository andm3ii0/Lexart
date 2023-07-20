import styled, { css } from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${props => props.isuser ? 'flex-end' : 'flex-start'};
  padding: 2px 20px 2px 20px;
  margin-bottom: 10px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px;
  border-radius: ${props => props.isuser ? "12px 12px 0px 12px" : "12px 12px 12px 0px;"};
  background-color: ${props => props.isuser ? '#007797' : '#999388'};
  color: ${props => props.isuser ? '#000' : '#000'};
`;

export const MessageText = styled.p`
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`; 