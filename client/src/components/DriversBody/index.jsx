import React, { useEffect, useState } from 'react'
import orgData from '../../data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, FormControl, Grid, InputLabel, Link, NativeSelect, Typography } from '@mui/material';
import PolarAreaChart from '../Charts/PolarAreaChart';
import LineChart from '../Charts/LineChart';

export default function DriversBody({ year, title, data, setYear, setDetail, arrDrivers }) {
    let arrDriversTemp = arrDrivers.toSorted((a, b) => {
        let fa = a.racer,
            fb = b.racer;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    const arrGrandPrix = [];
    arrDriversTemp[0].achievements.map(item => {
        arrGrandPrix.push(item.grandPrix);
    })

    let arrTemp = data.toSorted((a, b) => {
        let fa = a.driver,
            fb = b.driver;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    const bgColor = [
        '#839c6e',
        '#9cd681',
        '#1da2d6',
        '#f0615c',
        '#2caf19',
        '#2341e4',
        '#dde119',
        'rgb(5,6,12)',
        'rgb(225,6,0)',
        '#965621',
        '#1a7bd1',
        '#c49154',
        '#3bfe43',
        '#00cf89',
        '#67ecfb',
        '#d38218',
        '#2c1f07',
        '#1a8d6e',
        '#3dccbd',
        '#bde7c1',
        '#8B8C7A',
        '#256D7B',
        '#5E2129'
    ]

    const [driversData, setDriversData] = useState({
        labels: arrGrandPrix,
        datasets: arrDriversTemp.map((item, index) => (
            {
                label: `${item.racer}'s point`,
                data: item.achievements.map((achievement) => achievement.pts),
                borderColor: bgColor[index],
                backgroundColor: bgColor[index],
            }
        ))
    });

    const [chart, setChart] = useState({
        labels: arrTemp.map((item) => item.driver),
        datasets: [
            {
                label: `${year} RACER's TOTAL POINT`,
                data: arrTemp.map((item) => item.pts),
                backgroundColor: bgColor,
                hoverOffset: 4
            },
        ],
    });
    const [yearData, setYearData] = useState(year);

    useEffect(() => {
        setChart({
            labels: arrTemp.map((item) => item.driver),
            datasets: [
                {
                    label: `${year} RACER's TOTAL POINT`,
                    data: arrTemp.map((item) => item.pts),
                    backgroundColor: bgColor,
                    hoverOffset: 4
                },
            ],
        })
        setDriversData({
            labels: arrGrandPrix,
            datasets: arrDriversTemp.map((item, index) => (
                {
                    label: `${item.racer}'s point`,
                    data: item.achievements.map((achievement) => achievement.pts),
                    borderColor: bgColor[index],
                    backgroundColor: bgColor[index],
                }
            ))
        })
        setYearData(year)
    }, [year, data])

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
                                        <TableCell style={{ color: '#ffffff' }}>POS</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>DRIVER</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>NATIONALITY&nbsp;</TableCell>
                                        <TableCell align="left" style={{ color: '#ffffff' }}>CAR&nbsp;</TableCell>
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
                                                    {row.pos}
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Link 
                                                        sx={{
                                                            color:"black",
                                                            '&:hover': {
                                                                cursor: "pointer"
                                                            }
                                                        }}
                                                        underline='hover'
                                                        onClick={
                                                            () => { 
                                                                setDetail(row.driver); 
                                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }
                                                        }
                                                    >
                                                        {row.driver}
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="left">{row.nationality}</TableCell>
                                                <TableCell align="left">{row.car}</TableCell>
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
                                    Year
                                </InputLabel>
                                <NativeSelect
                                    value={yearData}
                                    inputProps={{
                                        name: 'year',
                                        id: 'uncontrolled-native',
                                    }}
                                    onChange={(e) => {
                                        setYearData(e.target.value);
                                        setYear(e.target.value);
                                    }
                                    }
                                >
                                    {
                                        orgData.dataF1.drivers.map((item) => (
                                            <option
                                                key={item.year}
                                                value={item.year}
                                            >
                                                {item.year}
                                            </option>
                                        ))
                                    }
                                </NativeSelect>
                            </FormControl>
                        </Box>
                        <Box>
                            <LineChart chartData={driversData} />
                        </Box>
                        <Typography variant='body2' mb='50px'>
                            {year} F1 - RACER'S POINTS.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={2.5}></Grid>
                            <Grid item xs={7}>
                                <Box width='100%' display="flex" justifyContent="center">
                                    <PolarAreaChart chartData={chart} />
                                </Box>
                                <Typography variant='body2' mt='10px'>
                                    {year} F1 - RACER'S TOTAL POINTS.
                                </Typography>
                            </Grid>
                            <Grid item xs={2.5}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </Box>
        </>
    )
}
