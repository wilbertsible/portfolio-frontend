import * as MuiIcons from '@mui/icons-material';


function IconWrapper(props){
    const {icon} = props;
    const IconComponent = MuiIcons[icon]
    return <IconComponent />
}

export default IconWrapper