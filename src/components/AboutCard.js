import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';




function AboutCard(props){
    const {description, title} = props;
    return(
        <Grid item xs={12} md={12} sx={{ mb: 5 }}>
            <Paper elevation={7} display="flex" sx={{ p: 2, bgcolor: 'grey.300' }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography>{description}</Typography>
            </Paper>
        </Grid>
    )
}

export default AboutCard