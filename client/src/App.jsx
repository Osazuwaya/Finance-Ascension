import Login from './components/login/login.jsx'

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
    