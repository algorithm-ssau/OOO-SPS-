import React, { useState, useRef } from 'react';
import "./calculator-first.css";

function CalculatorFirst() {
  const [inputValue, setInputValue] = useState('');
  const [resultText, setResultText] = useState('');
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  function handleClick() {
    // const input = inputRef.current;
    // const result = resultRef.current;
    const value = inputValue.trim();
    if (/^\d+\.?\d*$/.test(value) && parseFloat(value) > 1) {
      const calculation = parseFloat(value) / 1430;
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
      } else if (minutes > 1 && minutes <= 4) {
        strminute = `минуты`;
      } else {
        strminute = `минут`;
      }
      setResultText(`${hours} ${strhours} ${minutes} ${strminute}`);
    } else {
      alert('Пожалуйста, введите значение больше 1.');
    }
  }

  return (
    <div className="calculators">
      <div className="calculator-content">
        <h2>Расчет<br />для жидкого азота</h2>
        <div className="input">
          <div className="input__box">
            <label className="name__input_label">Объем (м&sup3;):</label>
            <input
              type="text"
              className="name__input inputFirst"
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="btn-calculator">
            <button onClick={handleClick} className="btn btnResFirst btn-margin-auto">
              Рассчитать
            </button>
          </div>
          <div className="result">
            <p>Производительность:</p>
            <div className="productivity-result">
              <b id="resultFirst" ref={resultRef}>{resultText}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorFirst;