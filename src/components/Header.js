import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

function Header(props){

    const {headers, title, mobileView} = props;
    const [state, setState] = React.useState({
        drawerOpen: false
    })
    const {drawerOpen} = state;

    const displayDesktop = () => {
        return (
            <React.Fragment>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Typography
                    component='h1'
                    variant='h4'
                    color='inherit'
                    align='left'
                    noWrap
                    sx={{ flex: 1, overflow: 'visible' }}
                    >
                        {title}
                    </Typography>
                    <Toolbar
                    component="nav"
                    sx={{ justifyContent: 'space-between' }}
                    >
                        {headers.map((headers) => (
                            <Button
                            color='inherit'
                            noWrap
                            key={headers.title}
                            href={headers.link}
                            disabled={!headers.is_active}
                            sx={{ justifyContent: 'flex-end' }}
                            >
                                {headers.title}
                            </Button>
                        ))}
                    </Toolbar>
                </Toolbar>
            </React.Fragment>
        );
    }

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) =>({...prevState, drawerOpen:true}));
        const handleDrawerClose = () => setState((prevState) =>({...prevState, drawerOpen:false}));
        return(
            
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                component='h1'
                variant='h4'
                color='inherit'
                align='left'
                noWrap
                sx={{ flex: 1, overflow: 'visible' }}
                >
                    {title}
                </Typography>
                <Menu 
                    fontSize = 'large'
                    color='inherit'
                    onClick={()=>handleDrawerOpen()}
                >
                </Menu>
                <Drawer
                anchor='top'
                open={drawerOpen}
                onClose={handleDrawerClose}
                >
                    {headers.map((headers) => (
                        <Button
                        color='inherit'
                        noWrap
                        key={headers.title}
                        href={headers.link}
                        disabled={!headers.is_active}
                        sx={{ justifyContent: 'flex-midlle' }}
                        >
                            {headers.title}
                        </Button>
                    ))}
                </Drawer>
            </Toolbar>
        );
    }

    return(
        <>
            {mobileView ? displayMobile():displayDesktop()}
        </>

    );
        
}

export default Header;