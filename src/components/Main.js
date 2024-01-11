import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../style/Main.css'

const Main = () => {
    const inputRef = useRef(null)
  return (
    <div className='container'>
      <h1 className=' title text-light'>Quiz Application</h1>
      <div className='Mainbox'>
      <div className='box b1'>
        <h3>Genaral Knowlege</h3>
        <div className='start s1'>
        <Link className='btn' to={'quiz'}>Start Quiz</Link>
      </div>
      </div>
      <div className='box b2'>
        <h3>Sports</h3>
        <div className='start s2'>
        <Link className='btn' to={'quiz2'}>Start Quiz</Link>
      </div>
      </div>
      <div className='box b3'>
        <h3>Science</h3>
        <div className='start s3'>
        <Link className='btn' to={'quiz3'}>Start Quiz</Link>
      </div>
      </div>
      <div className='box b4'>
        <h3>Programming</h3>
        <div className='start s4'>
        <Link className='btn' to={'quiz4'}>Start Quiz</Link>
      </div>
      </div>
      
      </div>
      

      <form id='form' >
      <input ref={inputRef} type='text'  className='userid' placeholder='UserName*'/>
      </form>

      
    </div>
  )
}

export default Main