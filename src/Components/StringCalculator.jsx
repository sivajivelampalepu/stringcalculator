import React, { useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { add } from './StringValidations';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdCalculator } from 'react-icons/io';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      const res = add(input);
      setResult(res);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <Card
        className="p-4 shadow-lg rounded-4  mt-5"
        style={{ width: '100%', maxWidth: '600px', background: 'white',height:"500" }}
      >
        <Card.Body>
          <Card.Title className="text-center mb-4 fs-3 fw-bold text-success"><IoMdCalculator/> String Calculator</Card.Title>

          <Form.Group className="mb-3">
            <Form.Label>
             <Alert variant="info" className="mt-4"> *** Enter Numbers (comma, newline, or custom delimiter)</Alert>
              
              </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              style={{ resize: 'none' }}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Examples: 1,2 or 1\n2 or //;\n1;2"
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" size="lg" onClick={handleCalculate}>
              Calculate
            </Button>
          </div>

          {error && (
            <Alert variant="danger" className="mt-4">
             <AiOutlineCloseCircle style={{color:"red"}}/> {error}
            </Alert>
          )}

          {result !== null && !error && (
            <Alert variant="success" className="mt-4">
              <AiOutlineCheckCircle style={{color:"green"}}/> Result: <strong>{result}</strong>
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default StringCalculator;
