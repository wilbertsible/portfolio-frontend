import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';
import React, {useEffect, useState} from 'react'

require('dotenv').config()

function ProjectList(props) {
    const {mobileView, headers} = props
    const [projectsList, setProjectsList] = useState([])
    const url = process.env.REACT_APP_API_URL

    useEffect(() => {
        const fetchContentList = async() =>{
            await axios.get(url + "/api/v1/website/projects")
            .then((contentResponse) =>{
            setProjectsList(contentResponse.data);
            })
            .catch((error) =>console.log(error))
        }
        fetchContentList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        
        <Container maxwidth="lg">
            <Header title="Wilbert Sible" headers={headers} mobileView={mobileView} />
            <Typography variant="h3" align="center" gutterBottom sx={{ mt: 6 }}>
                            {"Projects"}
                </Typography>
                <Divider />

                <Grid container spacing={6} justifyContent="center" sx={{ mt: 0}}>
                {projectsList.length > 0 ? projectsList.filter(project =>project.is_active).map((project, projectKey) =>{
                    return(
                    <Grid key={projectKey} item xs={6}>
                        <Post isHome={false} project={project}/>
                    </Grid>
                )}):<CircularProgress alignItems="center" sx={{marginTop: 5, ml: 10}}/>}
                </Grid>
            <Footer />
        </Container>
    )
}


export default ProjectList;