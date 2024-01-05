import {
    AppBar,
    Box,
    Container,
    Link, Stack, ThemeProvider, Toolbar,
    Typography,
    createTheme
} from "@mui/material";


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

const Navigation = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar>
                    <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Toolbar>
                                <Typography >TODO WITH MATERIAL</Typography>
                            </Toolbar>



                            <Stack direction={"row"} spacing={5}>
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