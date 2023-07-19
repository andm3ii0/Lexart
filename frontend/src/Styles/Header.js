import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";

export const HeaderContainer = styled.header`
  background-color: #004E98;
  display: flex;
  align-items: center;
  padding: 10px;export const
  color: #FFFFFF;
`;

export const UserIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  p:first-child {
    font-weight: bold;
  }
`;

export const BackArrow = styled(BsArrowLeft)`
  color: #FFFFFF;
  font-size: 24px;
  margin-right: 10px;
`;
