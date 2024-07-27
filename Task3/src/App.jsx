import { useState } from 'react'
import '../src/index.css';




const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [operationHistory, setOperationHistory] = useState('');

  const ButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const OperationClick = (operation) => {
    if (displayValue !== '') {
      setDisplayValue(displayValue + operation);
    }
  };

  const EqualClick = () => {
    if (displayValue !== '') {
      try {
        const result = eval(displayValue);
        setOperationHistory(displayValue + ' =');
        setDisplayValue(result.toString());
        
      } catch (error) {
        alert('Invalid expression');
        
      }
      
    }     
  };

  const ClearClick = () => {
    setDisplayValue('');
    setOperationHistory('');
  };

  return (
    
    <div className="calculator">
      <div className="display">
        <div className="history">{operationHistory}</div>
        <input
          type="text"
          className="input"
          value={displayValue}
          readOnly
        />
      </div>
      <div className="buttons">
        <button className="top btn operation" onClick={EqualClick}>=</button>
        <button className="top btn operation" onClick={() => OperationClick('%')}>%</button>
        <button className="top btn operation AC" onClick={ClearClick}>AC</button>
        <button className="btn num" onClick={() => ButtonClick('1')}>1</button>
        <button className="btn num" onClick={() => ButtonClick('2')}>2</button>
        <button className="btn num" onClick={() => ButtonClick('3')}>3</button>
        <button className="btn operation" onClick={() => OperationClick('+')}>+</button>
        <button className="btn num" onClick={() => ButtonClick('4')}>4</button>
        <button className="btn num" onClick={() => ButtonClick('5')}>5</button>
        <button className="btn num" onClick={() => ButtonClick('6')}>6</button>
        <button className="btn operation" onClick={() => OperationClick('-')}>-</button>
        <button className="btn num" onClick={() => ButtonClick('7')}>7</button>
        <button className="btn num" onClick={() => ButtonClick('8')}>8</button>
        <button className="btn num" onClick={() => ButtonClick('9')}>9</button>
        <button className="btn operation" onClick={() => OperationClick('*')}>*</button>
        <button className="btn num Zero" onClick={() => ButtonClick('0')}>0</button>
        <button className="btn num" onClick={() => ButtonClick('.')}>.</button>
        <button className="btn operation" onClick={() => OperationClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
