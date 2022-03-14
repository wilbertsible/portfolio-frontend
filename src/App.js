import './App.css';
import React, {useEffect, useState} from 'react'

import axios from 'axios';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import ProjectList from './pages/ProjectList'; 
import ProjectLayout from './components/ProjectLayout'; 

const theme = createTheme();

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [socials, setSocials] = useState([]);
  const [headerSections, setheaderSections] = useState([])

  const url = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetchSocials();
    fetchHeaderSections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async  function fetchSocials(){
    await axios.get(url + "/social")
    .then((socialsResponse) =>{
      const socials = JSON.parse(socialsResponse.data);
      setSocials(socials);
    })
  }

  async  function fetchHeaderSections(){
    await axios.get(url + "/header")
    .then((heardersResponse) =>{
      const headers = JSON.parse(heardersResponse.data);
      setheaderSections(headers);
    })
  }

  
  useEffect(() =>{
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
    return () => {
        window.removeEventListener('resize', () => setResponsiveness());
    }
  }, []);

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Routes>
        <Route exact path="/" 
        element={
          <Home 
          mobileView={mobileView}
          socials={socials}
          headers={headerSections}
          />} />
        <Route exact path="/Projects" 
        element={
          <ProjectList
            mobileView={mobileView}
            socials={socials}
            headers={headerSections}
          />} />
        <Route exact path="/Projects/:title" 
        element={
          <ProjectLayout
            mobileView={mobileView}
            socials={socials}
            headers={headerSections}
            //content={content}
          />} />
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
