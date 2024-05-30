import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileIn from './components/FileIn.jsx'
import FileParse from './components/FileParse.jsx'
import './App.css'
import {routes} from "../config.js"



function App() {
   
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={routes.file_in} element={<FileIn/>}/>
        <Route path={routes.file_parse} element={<FileParse/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}




export default App
