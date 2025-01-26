import Stats from './components/stats/stats.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Stats/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
    