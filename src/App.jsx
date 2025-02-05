import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Test from "./Pages/Test"
import CodeOfConduct from './Pages/CodeOfConduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/test" element={<Test/>}/> */}
        <Route path='/codeofconduct' element={<CodeOfConduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App