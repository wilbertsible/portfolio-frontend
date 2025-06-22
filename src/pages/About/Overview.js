import Paper from '@mui/material/Paper';
import ImageCarousel from '../../components/ImageCarousel';
import { Typography } from '@mui/material';


const carouselImages = [
    "https://i.imgur.com/PeNVG2R.jpg",
    "https://i.imgur.com/vpdAGf3.jpg",
    "https://i.imgur.com/DbQJsbV.jpg",
    "https://i.imgur.com/WYRxyAr.jpg",
    "https://i.imgur.com/XGyMUIO.jpg",
    "https://i.imgur.com/DNDQLnG.jpg",
    "https://i.imgur.com/McPIeXB.jpg",
    "https://i.imgur.com/vU6Vm3X.jpg",
    "https://i.imgur.com/kOQ74Zr.jpg",
    "https://i.imgur.com/AXU2gM2.jpg"
]


const Overview = () => {
    return(
        <div className="two-column-container">
            <div className="carousel-section" >
                <ImageCarousel images = {carouselImages}/>
            </div>
            <div className="description-section">
                <Paper elevation={2} display="flex" sx={{mt:'20px',p:2,bgcolor:'#fef8dd'}}> 
                <Typography variant ="h5">
                    Hey there! I'm Wilbert, and I am currently a data analyst and full stack web developer at Apple. I love diving into exciting projects across engineering and computer science. Off the clock, I channel my energy as a club volleyball coach. One of my greatest strengths is my knack for deeply understanding complex ideas and then simplifying them so others can easily grasp them. My past career as a chemist equipped me with sharp critical thinking skills, allowing me to meticulously examine any subject. In my free time, I'm either expanding my knowledge, bringing personal projects to life, or enjoying a good game of ultimate frisbee, volleyball, or whatever sport catches my eye.
                </Typography>
            </Paper>
            </div>
        </div>
    )


}

export default Overview;