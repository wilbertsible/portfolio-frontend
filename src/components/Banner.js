import * as React from 'react';
import Paper from '@mui/material/Paper';

function Banner(props) {
  const {imageFile} = props;
  return (
    <Paper
      sx={{
        position:'relative',
        color:'#000',
        mt:4,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundImage:`url(${imageFile})`,
        opacity:0.6,
        width:'100%',
        height:'250px',
      }}
    />
    )}
export default Banner