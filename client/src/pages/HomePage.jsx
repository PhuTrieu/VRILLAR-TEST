import React, { useEffect, useState } from 'react'
import RacesBody from '../components/RacesBody';
import DriversBody from '../components/DriversBody';
import TeamsBody from '../components/TeamsBody';
import RaceDetail from '../components/RaceDetail';
import DriverDetail from '../components/DriverDetail';
import TeamDetail from '../components/TeamDetail';
import data from '../data';
import { Button, Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

export default function HomePage() {
  const titles = ['RACES', 'DRIVERS', 'TEAMS'];
  const info = data.dataF1;
  const [year, setYear] = useState(info.races[0].year);
  const [title, setTitle] = useState(titles[0]);
  const [detail, setDetail] = useState('All');
  const [arrDetail, setArrDetail] = useState(info.races[0].results);
  const [arrInfoDetail, setArrInfoDetail] = useState([]);

  useEffect(() => {
    let arr = [];
    if (detail === 'All') {
      if (title === 'RACES') {
        arr = info.races.filter(item => item.year === year);
      }
      else if (title === 'DRIVERS') {
        arr = info.drivers.filter(item => item.year === year);
      }
      else {
        arr = info.teams.filter(item => item.year === year);
      }
      setArrDetail(arr[0].results);
    }
    else {
      if (title === 'RACES') {
        arr = info.races.filter(item => item.year === year);
        arr = arr[0].countries.filter(item => item.country === detail);
        setArrInfoDetail(arr[0].rank);
      }
      else if (title === 'DRIVERS') {
        arr = info.drivers.filter(item => item.year === year);
        arr = arr[0].racers.filter(item => item.racer === detail);
        setArrInfoDetail(arr[0].achievements);
      }
      else {
        arr = info.teams.filter(item => item.year === year);
        arr = arr[0].constructors.filter(item => item.constructor === detail);
        setArrInfoDetail(arr[0].achievements);
      }
    }
  }, [year, title, detail])

  return (
    <>
      <Typography variant='h3' marginBottom='50px' fontFamily='Orbitron'>
        F1 INFORMATION
      </Typography>
      <Grid container spacing={5} sx={{ mb: '10px' }}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={3}>
          <Typography variant='h5' fontFamily='Orbitron' sx={{ float: 'left' }}>
            Filter
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
      <Grid container spacing={5} sx={{ mb: '50px' }}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={3}>
          <Paper style={{ maxHeight: 160, overflow: 'auto' }} fontFamily='Orbitron'>
            <List>
              {
                data.dataF1.races.map(item => (
                  <ListItem key={item.year}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Button
                          sx={{
                            fontFamily: 'Orbitron',
                            fontSize: '16px',
                            color: '#05060c',
                            textDecoration: item.year === year ? 'underline' : 'none',
                            textDecorationColor: '#e10600',
                            textDecorationThickness: '3px',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline',
                              textDecorationColor: '#e10600',
                              textDecorationThickness: '3px',
                            }
                          }}
                          onClick={() => {
                              setYear(item.year);
                              setDetail("All");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }
                        >
                          {item.year}
                        </Button>
                      }
                    />
                  </ListItem>
                ))
              }
            </List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ maxHeight: 160, overflow: 'auto' }}>
            <List>
              {
                titles.map(item => (
                  <ListItem key={item}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Button
                          sx={{
                            fontFamily: 'Orbitron',
                            fontSize: '16px',
                            color: '#05060c',
                            textDecoration: item === title ? 'underline' : 'none',
                            textDecorationColor: '#e10600',
                            textDecorationThickness: '3px',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline',
                              textDecorationColor: '#e10600',
                              textDecorationThickness: '3px',
                            }
                          }}
                          onClick={() => {
                              setTitle(item);
                              setDetail("All");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }
                        >
                          {item}
                        </Button>
                      }
                    />
                  </ListItem>
                ))
              }
            </List>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ maxHeight: 160, overflow: 'auto' }}>
            <List>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={
                    <Button
                      sx={{
                        fontFamily: 'Orbitron',
                        fontSize: '16px',
                        color: '#05060c',
                        textDecoration: detail === 'All' ? 'underline' : 'none',
                        textDecorationColor: '#e10600',
                        textDecorationThickness: '3px',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                          textDecorationColor: '#e10600',
                          textDecorationThickness: '3px',
                        },
                      }}
                      onClick={() => {
                          setDetail('All');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    >
                      All
                    </Button>
                  }
                />
              </ListItem>
              {
                arrDetail.map((item, index) => (
                  <ListItem key={index}
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Button
                          sx={{
                            fontFamily: 'Orbitron',
                            fontSize: '16px',
                            color: '#05060c',
                            textDecoration: title === "RACES" ? (item.grandPrix === detail ? 'underline' : 'none') :
                              (title === "DRIVERS" ? (item.driver === detail ? 'underline' : 'none') :
                              (title === "TEAMS" && item.team === detail ? 'underline' : 'none')),
                            textDecorationColor: '#e10600',
                            textDecorationThickness: '3px',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline',
                              textDecorationColor: '#e10600',
                              textDecorationThickness: '3px',
                            }
                          }}
                          onClick={
                            () => {
                              setDetail(
                                title === "RACES" ? item.grandPrix :
                                (title === "DRIVERS" ? item.driver :
                                (title === "TEAMS" && item.team))
                              );
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }
                        >
                          {
                            title === "RACES" ? item.grandPrix :
                            (title === "DRIVERS" ? item.driver :
                            (title === "TEAMS" && item.team))
                          }
                        </Button>
                      }
                    />
                  </ListItem>
                ))
              }
            </List>
          </Paper>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
      {
        detail === "All"
          ?
          (title === "RACES" ? (<RacesBody year={year} title={title} data={arrDetail} />) :
          ((title === "DRIVERS") ? (<DriversBody year={year} title={title} data={arrDetail} setYear={setYear}/>) :
          ((title === "TEAMS") && (<TeamsBody year={year} title={title} data={arrDetail} setYear={setYear}/>))))
          :
          (title === "RACES" ? (<RaceDetail year={year} title={title} detail={detail} data={arrInfoDetail} setDetail={setDetail} arrDetail={arrDetail}/>) :
          ((title === "DRIVERS") ? (<DriverDetail year={year} title={title} detail={detail} data={arrInfoDetail} setDetail={setDetail} arrDetail={arrDetail}/>) :
          ((title === "TEAMS") && (<TeamDetail year={year} title={title} detail={detail} data={arrInfoDetail} setDetail={setDetail} arrDetail={arrDetail}/>))))
      }
    </>
  )
}