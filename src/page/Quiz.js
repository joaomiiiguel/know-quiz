import React from 'react'
import { Button, Divider  } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2D435F',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: '#FFF',
        height: '60vh',
        width: '60%',
        padding: '0 5%',
        borderRadius: 5,
        '& > *': {
            margin: theme.spacing(2),
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
    },
    HeaderQuiz:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TitleQuestion:{
        fontSize: 20
    }
}));

function Quiz() {
    let { amountQuest } = useParams();
    const classes = useStyles();
    return (
        <ThemeProvider>
            <div className={classes.root}>
                <div className={classes.HeaderQuiz}>
                    <p>Hello, <b>Miguel</b></p>
                    <div>
                        <p>Question 1/10</p>
                    </div>
                </div>
                <Divider />
                <p className={classes.TitleQuestion}>What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?</p>
                <div className={classes.contentButtons}>
                    <p>{amountQuest}</p>
                    <Button className={classes.buttonStyles} color="primary" >Demolition</Button>
                    <Button className={classes.buttonStyles} color="primary" >The Dream Team</Button>
                    <Button className={classes.buttonStyles} color="primary" >The Bushwhackers</Button>
                    <Button className={classes.buttonStyles} color="primary" >The British Bulldogs</Button>
                </div>

            </div>
        </ThemeProvider>

    )
}

export default Quiz
