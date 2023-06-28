import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Button, Divider } from "@mui/material";
import logo from '../../images/f1.png'

export default function Footer() {
    const col1 = ['Latest News', 'What is F1?', 'Drivers', 'Teams', 'Schedule'];
    const col2 = ['Standings', 'Driver Standings', 'Constructor Standings', 'F1 Awards'];

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: '50px',
                backgroundColor: '#05060c',
                color: '#ffffff'
            }}
        >
            <Container maxWidth="lg">
                <Box 
                    mt={1}
                    mb={1}
                    component="img"
                    sx={{ height: 70 }}
                    alt="Logo"
                    src={logo}
                >
                </Box>
                <Divider variant="middle" sx={{ backgroundColor: '#ffffff' }}/>
                <Grid container spacing={5} sx={{ m: 'auto' }}>
                    <Grid item xs={12} sm={4}>
                        {
                            col1.map(item => (
                                <Button
                                    key={item}
                                    sx={{
                                        display: 'block',
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            textDecoration: 'underline',
                                            textDecorationColor: '#e10600',
                                            textDecorationThickness: '3px',
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {
                            col2.map(item => (
                                <Button
                                    key={item}
                                    sx={{
                                        display: 'block',
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            textDecoration: 'underline',
                                            textDecorationColor: '#e10600',
                                            textDecorationThickness: '3px',
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.light" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" target="_blank" color="inherit">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/" 
                            target="_blank" 
                            color="inherit"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" target="_blank" color="inherit">
                            <Twitter />
                        </Link>
                        <Link href="https://www.youtube.com/" target="_blank" color="inherit">
                            <YouTube />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.light" align="center">
                        {"Copyright © "}
                        <Link color="inherit">
                            F1 Formula One World Championship Limited
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
