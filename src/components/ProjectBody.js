import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Banner from './Banner'
import ContentMapping from '../projects/ProjectMapping'
// import PC from '../Content/PC/PC'

import '../App.css'

import axios from 'axios';
import React, {useEffect, useState} from 'react'

require('dotenv').config()

function ProjectBody(props){
    const {projectTitle} = props
    const [project, setProject] = useState([])
    
    const url = process.env.REACT_APP_API_URL

    useEffect(() => {
        const fetchProject = async() =>{
            await axios.get(url + "/projects/" + projectTitle)
            .then((contentResponse) =>{
            const headers = JSON.parse(contentResponse.data);
            setProject(headers);
            })
            .catch((error) =>console.log(error))
        }
        fetchProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <>
        <Banner imageFile={project.length !== 0 ? project[0].bannerImage: ""}/>
        <Grid container spacing={5} sx={{mt: 0}}>
            <Grid item xs={12} >
                <Typography variant="h4" gutterBottom>
                    {project.length !== 0 ? project[0].title : ""}
                </Typography>
                <Divider />
                <ContentMapping 
                projectFileName={project.length !== 0 ? project[0].fileName : "Default"}/>
                </Grid>
            </Grid>
        </>
    )
}


export default ProjectBody