import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileIn from './components/FileIn.jsx'
import FileDetails from './components/FileDetails.jsx'
import './App.css'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileIn/>}/>
        <Route path="file-details" element={<FileDetails/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}




export default App
