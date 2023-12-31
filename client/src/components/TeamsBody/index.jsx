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
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';

export default function TeamsBody({ year, title, data, setYear, setDetail, arrTeams }) {
    let arrTeamsTemp = arrTeams.toSorted((a, b) => {
        let fa = a.constructor,
            fb = b.constructor;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    const arrGrandPrix = [];
    arrTeamsTemp[0].achievements.map(item => {
        arrGrandPrix.push(item.grandPrix);
    })

    let arrTemp = data.toSorted((a, b) => {
        let fa = a.team,
            fb = b.team;
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    const bgColor = [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(246,129,17)',
        'rgb(153,251,154)',
        'rgb(5,6,12)',
        'rgb(225,6,0)',
        'rgb(64,130,104)',
        'rgb(139,161,211)'
    ]
    
    const [teamsData, setTeamsData] = useState({
        labels: arrGrandPrix,
        datasets: arrTeamsTemp.map((item, index) => (
            {
                label: `${item.constructor}'s point`,
                data: item.achievements.map((achievement) => achievement.pts),
                borderColor: bgColor[index],
                backgroundColor: bgColor[index],
            }
        ))
    });

    const [chart, setChart] = useState({
        labels: arrTemp.map((item) => item.team),
        datasets: [
            {
                label: `${year} ${title.slice(0, -1)}'s TOTAL POINT`,
                data: arrTemp.map((item) => item.pts),
                backgroundColor: bgColor,
                hoverOffset: 4
            },
        ],
    });
    const [yearData, setYearData] = useState(year);

    useEffect(() => {
        setChart({
            labels: arrTemp.map((item) => item.team),
            datasets: [
                {
                    label: `${year} ${title.slice(0, -1)}'s TOTAL POINT`,
                    data: arrTemp.map((item) => item.pts),
                    backgroundColor: bgColor,
                    hoverOffset: 4
                },
            ],
        })
        setTeamsData({
            labels: arrGrandPrix,
            datasets: arrTeamsTemp.map((item, index) => (
                {
                    label: `${item.constructor}'s point`,
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
                                        <TableCell align="left" style={{ color: '#ffffff' }}>TEAM</TableCell>
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
                                                            color: "black",
                                                            '&:hover': {
                                                                cursor: "pointer"
                                                            }
                                                        }}
                                                        underline='hover'
                                                        onClick={
                                                            () => {
                                                                setDetail(row.team);
                                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }
                                                        }
                                                    >
                                                        {row.team}
                                                    </Link>
                                                </TableCell>
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
                            <LineChart chartData={teamsData} />
                        </Box>
                        <Typography variant='body2' mb='50px'>
                            {year} F1 - TEAM'S POINTS.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={2.5}></Grid>
                            <Grid item xs={7}>
                                <Box width='100%' display="flex" justifyContent="center">
                                    <DoughnutChart chartData={chart} />
                                </Box>
                                <Typography variant='body2' mt='10px'>
                                    {year} F1 - TEAM'S TOTAL POINT.
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
