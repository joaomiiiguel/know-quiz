import React, { useState } from 'react'
import { Button, Divider } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom'
import api from '../services/api'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2D435F',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        color: '#FFF',
        height: '60vh',
        width: '60%',
        padding: '0 5%',
        borderRadius: 5,
        '& > *': {
            margin: theme.spacing(2),
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FFF',
        },
        '& .MuiInput-underline': {
            fontFamily: 'Poppins',
            color: '#FFF',
            fontSize: 20,
            textDecoration: 'none'
        },

        
    },
    contentButtons: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    },
    buttonStyles: {
        margin: 10,
        border: '2px solid #fff',
        height: 50,
        color: '#FFF',
        fontFamily: 'Poppins',
        textDecoration: 'none'
    },
    HeaderQuiz: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TitleQuestion: {
        fontSize: 20
    }
}));

function Confirm({amountQuest}) {
    const classes = useStyles();
    const [dataQuiz, setDataQuiz] = useState()

    async function loadQuestions() {
        await api.get(`?amount=${amountQuest}&category=9&type=multiple`)
            .then(response => {
                setDataQuiz(response.data)
            })
    }

    console.log(amountQuest)
    return (
        <ThemeProvider>
            <div className={classes.root}>
               
                    <p>You chose <b>{amountQuest}</b> questions. <br/> Let's start?</p>
                    <div >
                        
                        <Link to="/Quiz">
                            <Button variant="outlined" color="primary">Start</Button>
                        </Link>
                        <Link to="/">
                            <Button variant="outlined" color="secondary" >Cancel</Button>
                        </Link>
                        
                    </div>
            </div>
        </ThemeProvider>

    )
}

export default Confirm
