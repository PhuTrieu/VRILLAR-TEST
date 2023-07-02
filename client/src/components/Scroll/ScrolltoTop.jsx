import { Box, IconButton } from '@mui/material';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useStyles from './styles'
import React, { useEffect, useState } from 'react'

export default function ScrolltoTop({ visible }) {
    const classes = useStyles();

    const [show, setShow] = useState(visible ? false : true)

    const handleScroll = () => {
        if (window.scrollY > visible) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (visible) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <>
            <Box>
                {show &&
                    <IconButton 
                        onClick={handleClick} 
                        className={classes.toTop} 
                        aria-label="to top" 
                        component="span"
                    >
                        <ExpandLessIcon fontSize='large'/>
                    </IconButton>
                }
            </Box>
                
        </>
    )
}
