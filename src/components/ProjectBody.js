import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Banner from './Banner'
import ProjectMapping from '../projects/ProjectMapping'
import CircularProgress from '@mui/material/CircularProgress';

import '../App.css'

import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

require('dotenv').config()

function ProjectBody(props){
    const [project, setProject] = useState([])
    const {title} = useParams();
    
    const url = process.env.REACT_APP_API_URL
    useEffect(() => {
        const fetchProject = async() =>{
            await axios.get(url + "/api/v1/website/projects/" + title.toLowerCase())
            .then((contentResponse) =>{
                setProject(contentResponse.data);
            })
            .catch((error) =>console.log(error))
        }
        fetchProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <Grid sx={{maxWidth: 'lg',marginLeft:'auto',marginRight:'auto'}}>
        
        <Banner imageFile={project.length !== 0 ? project.bannerImage: ""}/>
        <Grid container spacing={5} sx={{mt: 0}}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {project.length !== 0 ? project.title : ""}
                </Typography>
                <Divider />
                {project.length !== 0 ? (
                    <ProjectMapping projectFileName={project.fileName} />
                    ) : (
                    <CircularProgress alignItems="center" sx={{marginTop: 5, ml: 10}}/> // Or your actual loading screen component/animation
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}


export default ProjectBody