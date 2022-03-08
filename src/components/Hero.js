import * as React from 'react';
// import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';

function MainFeaturedPost(props) {
  const { hero } = props;

  return (
    <Paper
        elevation={10}
        square={true}
      sx={{
        position: 'relative',
        backgroundColor: 'black',
        color: '#fff',
        mt: 2,
        width:'100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '85% 0%',
        backgroundImage: `url(${hero})`,
      }}
     />)}

export default MainFeaturedPost;