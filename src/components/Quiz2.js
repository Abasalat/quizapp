import React from 'react'
import Question2 from './Question2'
const Quiz2 = () => {
    /** next biutton event handler */
    function onNext(){
        console.log('On next Click')
    }
    function onPrev(){
        console.log('On prev Click')
    }
  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>

    {/*display questoin*/}
    <Question2/>
    
    <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
    </div>
    </div>
  )
}

export {Quiz2}
