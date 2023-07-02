import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, Grid, InputLabel, NativeSelect, Typography } from '@mui/material';
import LineChart from '../Charts/LineChart';

export default function DriverDetail({year, title, detail, data, setDetail, arrDetail}) {
    const [chart, setChart] = useState({
        labels: data.map((item) => item.grandPrix),
        datasets: [
            {
                label: `${year} ${title.slice(0, -1)} ACHIEVEMENTS - ${detail.toUpperCase()}'s POINT`,
                data: data.map((item) => item.pts),
                backgroundColor: [
                    '#f4f4f4',
                ],
                borderColor: '#e10600',
                hoverOffset: 4
            },
        ],
    })
    const [detailData, setDetailData] = useState(detail);

    useEffect(() => {
        setChart({
            labels: data.map((item) => item.grandPrix),
            datasets: [
                {
                    label: `${year} ${title.slice(0, -1)} ACHIEVEMENTS - ${detail.toUpperCase()}'s POINT`,
                    data: data.map((item) => item.pts),
                    backgroundColor: [
                        '#f4f4f4',
                    ],
                    borderColor: '#e10600',
                    hoverOffset: 4
                },
            ],
        })
        setDetailData(detail)
    }, [year, detail, data])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs={10}>
                        <Typography variant='h4' marginBottom='10px' fontFamily='Orbitron' sx={{ float: 'left' }}>
                            {year} {title.slice(0, -1)} STANDINGS: {detail.toUpperCase()}
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
                                        <TableCell align="left" style={{ color: '#ffffff' }}>CAR&nbsp;</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>RACE POSITION&nbsp;</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>PTS&nbsp;</TableCell>
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
                                                <TableCell align="left">{row.car}</TableCell>
                                                <TableCell align="left">{row.racePos}</TableCell>
                                                <TableCell align="left">{row.pts}</TableCell>
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
            <Box sx={{ flexGrow: 1, mt: '50px' }}>
                <Grid container spacing={3}>
                    <Grid item xs></Grid>
                    <Grid item xs={10}>
                        <Typography variant='h4' marginBottom='10px' fontFamily='Orbitron' sx={{ float: 'left' }}>
                            CHART:
                        </Typography>
                        <Box sx={{ minWidth: 120, mb: "50px" }}>
                            <FormControl fullWidth>
                                <InputLabel
                                    variant="standard"
                                    htmlFor="uncontrolled-native"
                                    sx={{
                                        "&.Mui-focused": {
                                            color: "#e10600"
                                        }
                                    }}
                                >
                                    Driver
                                </InputLabel>
                                <NativeSelect
                                    value={detailData}
                                    inputProps={{
                                        name: 'driver',
                                        id: 'uncontrolled-native',
                                    }}
                                    onChange={(e) => {
                                        setDetailData(e.target.value);
                                        setDetail(e.target.value);
                                    }
                                    }
                                >
                                    {
                                        arrDetail.map((item) => (
                                            <option
                                                key={item.driver}
                                                value={item.driver}
                                            >
                                                {item.driver}
                                            </option>
                                        ))
                                    }
                                </NativeSelect>
                            </FormControl>
                        </Box>
                        <LineChart chartData={chart}/>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </Box>
        </>
    )
}
