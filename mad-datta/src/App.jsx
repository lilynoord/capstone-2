import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileIn from './components/FileIn.jsx'
import FileParse from './components/FileParse.jsx'
import AnalysisMain from './components/AnalysisMain.jsx';
import './App.css'
import {routes} from "../config.js"

import '@mantine/core/styles.css';

import { createTheme,MantineProvider } from '@mantine/core';
import AOverBAnalyzer from './analyzers/AOverBAnalyzer.js';
import DoAnalysis from './components/DoAnalysis.jsx';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

export default function App() {
  return <MantineProvider theme={theme}>{
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={routes.file_in} element={<FileIn/>}/>
        <Route path={routes.file_parse} element={<FileParse/>} />
        <Route path={routes.analysis_main} element={<AnalysisMain />}/>
        <Route path={routes.a_over_b} element={<DoAnalysis what="a-over-b"/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
    
    }</MantineProvider>;
}






