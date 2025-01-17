import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Test from './Test'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/Test" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App