import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoadPage/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
    