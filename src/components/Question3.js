import React, { useEffect, useState } from 'react';
import randomQuestions5 from '../database/Data2';

const Question3 = () => {
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    console.log(randomQuestions5)
  });

  // Use optional chaining to prevent errors if `questions[0]` is undefined
  const question = randomQuestions5[0];

  function onSelect() {
    console.log('radio button change');
  }

  // Check if question is defined before rendering its properties
  return (
    <div className='questions'>
          <h2 className='text-light'>{question.question}</h2>
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
    </div>
  );
};

export default Question3;
