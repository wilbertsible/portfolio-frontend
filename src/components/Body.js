import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Post from '../components/Post';
import AboutCard from '../components/AboutCard';
import Social from '../components/Social';

import axios from 'axios';
import React, {useEffect, useState} from 'react'

require('dotenv').config()

function Body(props){
    const {sidebar, socials, mobileView} = props;

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


    const displayDesktop = () => {
        return(
            <Grid container spacing={5} sx={{mt: 0}}>
                <Grid item xs={8} >
                    <Typography variant="h6" gutterBottom>
                        {"Projects"}
                    </Typography>
                    <Divider />
                    <Grid container justifyContent="center" spacing={0} >

                        {projectsList.length > 0 ? projectsList.filter(project=>project.is_active).map((project) =>{
                            return(
                                <Grid item xs={12} md={12} sx={{mt: 2}}>
                                    <Post isHome={true} project={project}/>
                                </Grid>
                        )}):<CircularProgress sx={{mt: 5, ml: 10}}/>}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <AboutCard
                    title={sidebar.title}
                    description={sidebar.description}
                    />
                    <Social
                    socials={socials}
                    />
                </Grid>
            </Grid>
        )
    }

    const displayMobile = () => {
        return(
            <Grid container spacing={5} sx={{mt: 0}}>
                <Grid item xs={12} >
                    <AboutCard
                    title={sidebar.title}
                    description={sidebar.description}
                    />
                    <Typography variant="h6" gutterBottom>
                        {"Projects"}
                    </Typography>
                    <Divider />
                    <Grid container spacing={0} >
                        {projectsList.length > 0 ? projectsList.filter(project=>project.is_active).map((project) =>{
                            return(
                                <Grid item xs={12} md={12} sx={{mt: 2}}>
                                    <Post isHome={true} project={project}/>
                                </Grid>
                        )}):<CircularProgress sx={{mt: 5, ml: 10}}/>}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                <Social
                socials={socials}
                />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            {mobileView ? displayMobile():displayDesktop()}
        </>
    )
    
}

export default Body;