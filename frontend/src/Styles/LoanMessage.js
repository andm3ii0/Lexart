import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  max-width: 100%;
  margin: 20px auto;
`;

export const OptionsTopic = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 8px;
  cursor: pointer;
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;

export const OptionsHiddenContent = styled.div`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  margin-top: 5px;
  padding: 8px;
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* Adicione a propriedade para quebrar as palavras */
  overflow-wrap: break-word;
`;

export const OptionsLink = styled.a`
  color: #007bff;
  text-decoration: underline;
`;