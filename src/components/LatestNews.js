import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {DateTimeToDateString} from '../utils/DateTimeConverter';

const url = process.env.REACT_APP_API_URL
function LatestNews(){
    const [latestNewsData, setLatestNewsData] = useState([])
    useEffect(() => {
            const fetchLatestNews = async() =>{
                await axios.get(url + "/api/v1/website/latest-news")
                .then((contentResponse) =>{
                    setLatestNewsData(contentResponse.data);
                })
                .catch((error) =>console.log(error))
            }
            fetchLatestNews();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    return(
        <Grid item xs={12} md={12} sx={{mb: 5}}>
            <Paper elevation={2} display="flex" sx={{p:2,bgcolor:'#fef8dd'}}>
            <Typography variant="h6" gutterBottom>
                Latest News
            </Typography>
            <Typography>{latestNewsData["latest_news"]}</Typography>
            <Typography variant="caption">Date Updated: {DateTimeToDateString(latestNewsData["date_added"])}</Typography>
            </Paper>
        </Grid>
    )
}

export default LatestNews