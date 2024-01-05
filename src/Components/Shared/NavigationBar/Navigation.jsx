import {
    AppBar,
    Box,
    Container,
    Link, Stack, Toolbar,
    Typography
} from "@mui/material";

const Navigation = () => {
    return (
        <>
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
        </>
    );
};

export default Navigation;