import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";

export const HeaderContainer = styled.header`
  display: flex;
  width: 390px;
  height: 82px;
  align-items: center;
  gap: 10px;
  background: #03B9AD;
  padding-left: 20px;
`;

export const UserIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 15px;

  img {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0;
    color: #FFF;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  p:first-child {
    font-size: 16px;
    font-weight: 800;
  }
`;

export const BackArrow = styled(BsArrowLeft)`
  width: 21px;
  height: 18px;
  flex-shrink: 0;
  fill: #FFF;
`;
