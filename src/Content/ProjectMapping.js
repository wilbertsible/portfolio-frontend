
import * as React from 'react'; 
import PC from './PC'
import Portfolio from './Portfolio'
import Default from './Default'

const projects ={
    Default:Default,
    PC:PC,
    Portfolio:Portfolio
}



function ProjectMapping(props) {
    const {projectFileName} = props;
    const ComponentToRender = projects[projectFileName]
    return(<ComponentToRender/>)
}

export default ProjectMapping;