import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box component="footer" sx={{bgcolor:'background.paper',py: 6}}>
         <Container maxWidth="lg">
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://wilbertsible.com/">
        WilbertSible
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
    </Box>
  );
}



export default Footer;