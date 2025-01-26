import Stats from './components/stats/stats.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from './components/MainPage/MainPage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/main-page' element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
    