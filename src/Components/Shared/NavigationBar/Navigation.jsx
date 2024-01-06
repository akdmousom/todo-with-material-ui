import {
    AppBar,
    Box,
    Container,
    Link, Stack, ThemeProvider, Toolbar,
    Typography,
    
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { darkTheme } from "../../../Utils/Themes/Themes";




const Navigation = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Toolbar >
                                <MenuIcon  sx={{display:{xs:'block', md:'none'}}}/>
                                <Typography sx={{display:{xs:"none", md:'block'}}} >TODO WITH MATERIAL</Typography>
                            </Toolbar>



                            <Stack sx={{display:{xs: 'none', sm:'none', md:'block'}}} direction={"row"} spacing={5}>
                                <Link href="#" underline="none" color="inherit">Home</Link>
                                <Link href="#" underline="none" color="inherit">About</Link>
                                <Link href="#" underline="none" color="inherit">Contact</Link>
                                <Link href="#" underline="none" color="inherit">Login</Link>
                            </Stack>
                        </Box>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    );
};

export default Navigation;