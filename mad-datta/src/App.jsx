 import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import FileIn from './components/FileIn.jsx'
import FileParse from './components/FileParse.jsx'
import AnalysisMain from './components/AnalysisMain.jsx';
import './App.css'
import {routes} from "../config.js"

import '@mantine/core/styles.css';

import {   createTheme,MantineProvider } from '@mantine/core';
import DoAnalysis from './components/DoAnalysis.jsx';
import ErrorElement from "./components/ErrorElement.jsx";
import { ErrorBoundary } from "react-error-boundary";

const clearFiles = () => {
  localStorage.clear();
}
const NavBar = () => {
  const nav = useNavigate()
  const upload = () => {clearFiles();nav(routes.file_in)}
  const review = () => {nav(routes.file_parse)}
  const analyze = () => {nav(routes.analysis_main)}
  return (
    <>
    <div><h5>{localStorage.getItem("fileName")}</h5></div>
    <nav> 
      <button onClick={upload}>Upload File</button>
      <button onClick={review}>Review File</button>
      <button onClick={analyze}>Select Analysis</button>
    </nav>
    </>
    
    
  )
}
const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});
const items = [
  {title: "A", href:routes.a_over_b}
]
export default function App() {
  return <MantineProvider theme={theme}>{
    <div>
       
      <BrowserRouter> 
      <NavBar/>
      <br></br>
      <Routes>
        

       
        <Route  path={routes.file_in} element={<FileIn/>}/>
        <Route path={routes.file_parse} element={<FileParse/>} />
        <Route path={`${routes.analysis_main}`} element={<AnalysisMain />}/>
        <Route path={routes.a_over_b} element={<DoAnalysis what={routes.a_over_b}/>} />
        <Route path={routes.frequency_histogram} element={<DoAnalysis what={routes.frequency_histogram}/>}/>
        <Route path={routes.frequency_pie} element={<DoAnalysis what={routes.frequency_pie}/>}/>
      </Routes>
       
      </BrowserRouter>
      
    </div>
    
    }</MantineProvider>;
}






