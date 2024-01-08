import {
    AppBar,
    Box,
    Container,
    Stack, Switch, Toolbar,
    Typography,

} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";






const pages = [
    {
        "path": "/",
        "Route": "Home",
        "id": 1
    },
    {
        "path": "/service",
        "Route": "Service",
        "id": 2
    },
    {
        "path": "/about",
        "Route": "About",
        "id": 3
    },

]





const Navigation = ({ darkMode, setDarkMode }) => {

    const label = {inputProps:{'aria-label':'Size switch demo'}};

    return (
        <>

            <AppBar position="static">
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Toolbar >
                            <MenuIcon sx={{ display: { xs: 'block', md: 'none' } }} />
                            <Typography sx={{ display: { xs: "none", md: 'block' } }} >TODO WITH MATERIAL</Typography>
                        </Toolbar>

                        <Stack key={nanoid()} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} direction={"row"} spacing={5}>

                            {
                                pages.map((page, index) => {
                                    return (<Link key={index} style={{ textDecoration: 'none', color: 'white' }} to={`${page.path}`}>{page.Route}</Link>)
                                })

                            }

                            <Switch {...label}  onChange={()=>setDarkMode(!darkMode)} checked={darkMode} color="default" />


                        </Stack>
                    </Box>
                </Container>
            </AppBar>

        </>
    );
};

export default Navigation;