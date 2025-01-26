import Stats from './components/stats/stats.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from './components/MainPage/MainPage'
import Quiz from './components/quiz/quiz.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quiz/>}></Route>
          <Route path='/main-page' element={<Quiz/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
    