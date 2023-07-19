import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  width: 300px;
  margin: 20px auto;
`;

export const OptionsTopic = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const OptionsVisibleContent = styled.div``;

export const OptionsHiddenContent = styled.div`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
`;

export const OptionsLink = styled.a`
  color: #007bff;
  text-decoration: underline;
`;