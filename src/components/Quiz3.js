import React from 'react'
import Question3 from './Question3'
const Quiz3 = () => {
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
    <Question3/>
    
    <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
    </div>
    </div>
  )
}

export {Quiz3}
