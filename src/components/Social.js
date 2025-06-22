import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconWrapper from '../components/IconWrapper';
import axios from 'axios';


require('dotenv').config()
const url = process.env.REACT_APP_API_URL

function Social() {
  const [socials, setSocials] = useState([])

    useEffect(() => {
            const fetchSocials = async() =>{
                await axios.get(url + "/api/v1/website/social")
                .then((contentResponse) =>{
                setSocials(contentResponse.data);
                })
                .catch((error) =>console.log(error))
            }
            fetchSocials();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
    return (
      <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Social
        </Typography>
        {socials.filter((network) =>{
          return(network.is_active === true)
        }).sort()
        .map((network) => {
          return(
          <Link
            display="flex"
            variant="body1"
            href={network.link}
            key={network.name}
            sx={{mb:2}}
          >
            <Stack direction="row" spacing={1} alignItems="center">
            <IconWrapper icon={network.icon} />
              <span>{network.name}</span>
            </Stack>
          </Link>
          )
        })}
      </Grid>
    );
}


export default Social;