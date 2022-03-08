import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import axios from 'axios';
import React, {useEffect, useState} from 'react'

function ProjectList(props) {
    const {mobileView, headers} = props
    const [projectsList, setContentList] = useState([])
    const url = "http://127.0.0.1:5000/"

    useEffect(() => {
        const fetchContentList = async() =>{
            await axios.get(url + "projects")
            .then((contentResponse) =>{
            const headers = JSON.parse(contentResponse.data);
            setContentList(headers);
            })
            .catch((error) =>console.log(error))
        }
        fetchContentList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(projectsList)
    return(
        <Container maxwidth="lg">
            <Header title="Wilbert Sible" headers={headers} mobileView={mobileView} />
            <Grid container spacing={6} sx={{ mt: 0 }}>
                <Grid item xs='12'>
                <Typography variant="h3" align='center' gutterBottom>
                            {"Projects"}
                </Typography>
                <Divider />
                </Grid>
                {projectsList.map((project) =>{
                    return(<Grid item xs='6'>
                        <Post isHome={false} project={project}/>
                    </Grid>
                )})}
            </Grid>
            <Footer />
        </Container>
    )
}


export default ProjectList;