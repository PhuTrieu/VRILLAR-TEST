import React, { useState } from 'react'
import data from '../../data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';

export default function RacesBody({year, title, data}) {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs={10}>
                        <Typography variant='h4' marginBottom='10px' fontFamily='Orbitron' sx={{ float: 'left' }}>
                            {year} {title.slice(0, -1)} {title == 'RACES' ? 'RESULTS' : 'STANDINGS'}
                        </Typography>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs={10}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: '#e10600' }}>
                                        <TableCell style={{ color: '#ffffff' }}>GRAND PRIX</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>DATE</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>WINNER&nbsp;</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>CAR&nbsp;</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>LAPS&nbsp;</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>TIME&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.map((row, index) => (
                                            <TableRow
                                                hover
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.grandPrix}
                                                </TableCell>
                                                <TableCell align="left">{row.date}</TableCell>
                                                <TableCell align="left">{row.winner}</TableCell>
                                                <TableCell align="left">{row.car}</TableCell>
                                                <TableCell align="left">{row.laps}</TableCell>
                                                <TableCell align="left">{row.time}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </Box>
        </>
    )
}
