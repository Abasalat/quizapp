import React from 'react'

const Quiz = () => {
    /** next biutton event handler */
    function onNext(){
        console.log('On next Click')
    }
  return (
    <div className='container'>
    <h1 className='title text-light'>Quiz Application</h1>

    {/*display questoin*/}
    
    <div className='grid'>
        <button className='btn next' onClick={onNext}>Next</button>
    </div>
    </div>
  )
}

export default Quiz
