import './App.css';
import React, {useEffect, useState} from 'react'

import axios from 'axios';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About/About';
import Overview from './pages/About/Overview';
import SoftwareDeveloper from './pages/About/SoftwareDeveloper';
import Volleyball from './pages/About/Volleyball';
import Ultimate from './pages/About/Ultimate';
import Chemist from './pages/About/Chemist';
import ProjectList from './pages/ProjectList'; 
import ProjectBody from './components/ProjectBody';
import Contact from './pages/Contact'
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme();

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [socials, setSocials] = useState([]);

  const url = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetchSocials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async  function fetchSocials(){
    await axios.get(url + "/api/v1/website/social")
    .then((socialsResponse) =>{
      setSocials(socialsResponse.data);
    })
  }

  
  useEffect(() =>{
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
        window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Header title="Wilbert Sible" mobileView={mobileView} />
      <Routes>
        <Route exact path="/" element={<Home mobileView={mobileView}/>} />
        <Route exact path="/about" element={<About socials={socials}/>}>
          <Route index element={<Overview/>}/>
          <Route exact path="/about/software-developer" element={<SoftwareDeveloper/>} />
          <Route exact path="/about/volleyball" element={<Volleyball />} />
          <Route exact path="/about/ultimate" element={<Ultimate />} />
          <Route exact path="/about/chemist" element={<Chemist />} />
        </ Route>
        <Route exact path="/projects" element={<ProjectList/>} />
        <Route exact path="/projects/:title" element={<ProjectBody/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>
    <Footer />
    </ThemeProvider>
    
  );
}

export default App;
