import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




function Post(props) {
  const { project, isHome } = props;
  const displayHome = () => {
    return (
      <CardActionArea component="a" href={window.location.href +"Projects/"+ project.fileName}>
        <Card elevation={5} sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {project.title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={project.bannerImage}
            alt={project.bannerImage}
          />
        </Card>
      </CardActionArea>
    );
  }
  const displayProjectsList = () => {
    return (
      <Card sx={{ display:'flex', height:'240px' }}>
        <CardActionArea component="a" href={window.location.href +"/"+ project.fileName}>
          <CardMedia
            component="img"
            height="140"
            image={project.bannerImage}
            alt={project.bannerImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <>
        {isHome ? displayHome():displayProjectsList()}
    </>
)
}


export default Post;