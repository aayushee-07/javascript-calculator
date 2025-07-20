import React, { useState } from 'react';
import './index.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(expression).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setExpression('');
      setResult('');
    } else if (value === '⌫') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    'AC', '⌫', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.', 
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="button-grid">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={`button ${
              btn === 'AC' ? 'ac' :
              btn === '⌫' ? 'cancel' :
              ['+', '-', '*', '/'].includes(btn) ? 'operator' :
              btn === '=' ? 'equals' : 'number'
            }`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
