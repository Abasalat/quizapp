import React, { useEffect, useState } from 'react';
import { fetchDataAndConvert } from '../database/Data';

const Question1 = () => {
  const [checked, setChecked] = useState(undefined);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchDataAndConvert().then((formattedData) => {
      console.log(formattedData[0]);
      setQuestions(formattedData);
    });
  }, []);

  const question = questions[0];

  function onSelect() {
    console.log('radio button change');
  }

  return (
    <div className='questions'>
      <h2 className='text-light'>{question.question}</h2>
      {question && (
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <input
                type='radio'
                value={option}
                name='options'
                id={`q1-option-${index}`}
                onChange={onSelect}
              />
              <label className='text-primary' htmlFor={`q1-option-${index}`}>
                {option}
              </label>
              <div className='check'></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question1;
