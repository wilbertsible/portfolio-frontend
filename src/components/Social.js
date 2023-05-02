import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconWrapper from '../components/IconWrapper'

function Social(props) {
  const {socials} = props;
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