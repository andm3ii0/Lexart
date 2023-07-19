import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Result = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

export const MatrixTable = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Td = styled.td`
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
`;