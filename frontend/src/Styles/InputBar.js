import styled from 'styled-components';

export const InputBarContainer = styled.div`
  width: 390px;
  height: 65px;
  flex-shrink: 0;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justufy-content: space-around;
  gap: 15px;
  padding: 10px;
`;

export const InputField = styled.input`
  width: 313px;
  height: 41px;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: rgba(3, 185, 173, 0.25);
  padding-left: 10px;
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SendButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;
