import React from 'react'

import Container from '@mui/material/Container';

import Hero from '../components/Hero';
import HeroImage from '../images/hero.jpg';
import Body from '../components/Body'




function Home(props){
    const {mobileView, socials} = props

    return(
        <Container maxwidth="lg">
            <Hero hero={HeroImage} />
            <Body socials={socials} mobileView={mobileView}/>
        </Container>
    )
}

export default Home;