import React from 'react'

import Container from '@mui/material/Container';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import HeroImage from '../images/hero.jpg';
import Body from '../components/Body'


const sidebar = {
    title: 'About',
    description:
        'Etiam porta malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
};


function Home(props){
    const {mobileView, socials, headers} = props

    return(
        <Container maxwidth="lg">
            <Header title="Wilbert Sible" headers={headers} mobileView={mobileView} />
            <Hero hero={HeroImage} />
            <Body sidebar={sidebar} socials={socials} mobileView={mobileView}/>
            <Footer />
        </Container>
    )
}

export default Home;