
import * as React from 'react'; 
import PC from './PC'
import Portfolio from './Portfolio'
import SudokuSolver from './SudokuSolver'
import Zinny from './Zinny'
import Default from './Default'

const projects ={
    Default:Default,
    PC:PC,
    Portfolio:Portfolio,
    SudokuSolver:SudokuSolver,
    Zinny:Zinny
}



function ProjectMapping(props) {
    const {projectFileName} = props;
    const ComponentToRender = projects[projectFileName]
    return(<ComponentToRender />)
}

export default ProjectMapping;