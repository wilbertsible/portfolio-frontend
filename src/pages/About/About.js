import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageButtons from './ImageButtons';
import './About.css';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';




const About = () => {
    const navigate = useNavigate();
    const handleImageClick = (url) => {
        navigate(url);
    };
    return (
        <Container maxwidth="lg">
                <Grid container spacing={5} sx={{mt: 0}}>
                <Grid item xs={12} >
                    <Typography variant="h4" gutterBottom>
                        About me
                    </Typography>
                    <Divider/>
                    <ImageButtons handleImageClick={handleImageClick} />
                    <Outlet />
                   
                </Grid>
            </Grid>
        </Container>
    );
}


export default About;