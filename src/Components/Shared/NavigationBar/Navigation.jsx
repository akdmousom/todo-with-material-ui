import {
    AppBar,
    Box,
    Container,
     Stack, Toolbar,
    Typography,

} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom";


const page = [
    {
      "path" : "/",
      "Route" : "Home"
    },
    {
      "path" : "/service",
      "Route" : "Service"
    },
    {
      "path" : "/about",
      "Route" : "About"
    },
    
  ]





const Navigation = () => {
    return (
        <>

            <AppBar position="static">
                <Container>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Toolbar >
                            <MenuIcon sx={{ display: { xs: 'block', md: 'none' } }} />
                            <Typography sx={{ display: { xs: "none", md: 'block' } }} >TODO WITH MATERIAL</Typography>
                        </Toolbar>

                        <Stack sx={{ display: { xs: 'none', sm: 'none', md: 'block'} }} direction={"row"} spacing={5}>
                            
                            {page.map(page =>{
                                return(<><Link style={{textDecoration:'none', color:'white'}} to={`${page.path}`}>{page.Route}</Link></>)
                            })}
                      
                        </Stack>
                    </Box>
                </Container>
            </AppBar>

        </>
    );
};

export default Navigation;