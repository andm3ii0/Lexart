import React, { useState } from 'react';
import { cyclotron } from '../cyclotron';
import { Container, Form, Label, Select, Button, Result, MatrixTable, Td } from '../Styles/CyclotronPage';


const CyclotronPage = () => {
  const [sizeX, setSizeX] = useState(4);
  const [sizeY, setSizeY] = useState(4);
  const [particle, setParticle] = useState('e');
  const [resultMatrix, setResultMatrix] = useState([]);

  const handleSizeXChange = (event) => {
    setSizeX(parseInt(event.target.value, 10));
  };

  const handleSizeYChange = (event) => {
    setSizeY(parseInt(event.target.value, 10));
  };

  const handleParticleChange = (event) => {
    setParticle(event.target.value);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    const newMatrix = Array.from({ length: sizeY }, () => Array(sizeX).fill('1'));
    const result = cyclotron(particle, newMatrix);
    setResultMatrix(result);
  };

  return (
    <Container>
      <Form onSubmit={handleConfirm}>
        <Label>Matrix Size (X):</Label>
        <Select value={sizeX} onChange={handleSizeXChange}>
          {Array.from({ length: 9 }, (_, index) => index + 4).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <Label>Matrix Size (Y):</Label>
        <Select value={sizeY} onChange={handleSizeYChange}>
          {Array.from({ length: 9 }, (_, index) => index + 4).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <Label>Select Particle:</Label>
        <Select value={particle} onChange={handleParticleChange}>
          <option value="e">Electron</option>
          <option value="p">Proton</option>
          <option value="n">Neutron</option>
        </Select>
        <Button type="submit">Confirm</Button>
      </Form>
      {resultMatrix.length > 0 && (
        <>
          <Result>Result Matrix:</Result>
          <MatrixTable>
            <tbody>
              {resultMatrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <Td key={colIndex}>{col}</Td>
                  ))}
                </tr>
              ))}
            </tbody>
          </MatrixTable>
        </>
      )}
    </Container>
  );
};

export default CyclotronPage;
