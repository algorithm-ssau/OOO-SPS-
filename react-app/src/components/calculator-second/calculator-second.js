import React, { useState } from 'react';
import "./calculator-second.css";

function CalculatorSecond() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(false);

  function btnSecond() {
    const input = document.querySelector('.inputSecond');
    const inputValue = input.value.trim();
    const shift16 = document.querySelector('input[name="shift"][value="16"]');
    const shift20 = document.querySelector('input[name="shift"][value="20"]');
    let calculation;
    if (/^\d+\.?\d*$/.test(inputValue) && parseFloat(inputValue) > 1 ) {
      if (shift16.checked && !shift20.checked) {
        calculation = parseFloat(inputValue) / 16;
      } else if (shift20.checked && !shift16.checked) {
        calculation = parseFloat(inputValue) / 20;
      }
      const hours = Math.floor(calculation);
      const minutes = Math.floor((calculation - hours) * 60);
      let strhours = '';
      let strminute = '';
      if (hours === 1) {
        strhours = `час`;
      } else if (hours > 1 && hours <= 4) {
        strhours = `часа`;
      } else {
        strhours = `часов`;
      }
      if (minutes === 1) {
        strminute = `минута`;
      } else if (hours > 1 && hours <= 4) {
        strminute = `минуты`;
      } else {
        strminute = `минут`;
      }
      setResult(`${hours} ${strhours} ${minutes} ${strminute}`);
      setError(false);
    } else {
      setError(true);
      setResult('');
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="calculator-content">
      <h2>Расчет<br />для газообразного азота</h2>
      <div className="input">
        <div className={`input__box ${error ? 'error' : ''}`}>
          <label className="name__input_label">Объем (м&sup3;):</label>
          <input type="text" className="name__input inputSecond" value={inputValue} onChange={handleInputChange} />
          <label><input type="radio" name="shift" value="16"  />16 часов</label>
          <label><input type="radio" name="shift" value="20" />20 часов</label>
        </div>
        <div className="btn-calculator">
          <button onClick={btnSecond} className="btn btnCheck btn-margin-auto">Рассчитать</button>
        </div>
        <div className="result">
          <p>Производительность:</p>
          <div className="productivity-result">
            <b id="resultSecond">{result}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorSecond;