import Stats from './components/stats/stats.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from './components/MainPage/MainPage'
import LoginPage from './components/login/login.jsx'
import StatPage from './components/stats/stats.jsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/main-page' element={<MainPage/>}></Route>
          <Route path='/stats-page' element={<StatPage/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
    