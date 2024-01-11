import '../style/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//**import component */
import Main from './Main';
import {Quiz} from './Quiz';
import {Quiz2} from './Quiz2';
import {Quiz3} from './Quiz3';
import {Quiz4} from './Quiz4';
import Result from './Result';
import Data from '../database/Data'

//**react routes */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/quiz2',
    element: <Quiz2></Quiz2>
  },
  {
    path: '/quiz3',
    element: <Quiz3></Quiz3>
  },
  {
    path: '/quiz4',
    element: <Quiz4></Quiz4>
  },
  {
    path: '/result',
    element: <Result></Result>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router} />    
    </>
  );
}

export default App;
