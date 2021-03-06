import React, { useState } from 'react'
import { Input } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

import ButtonForm from '../components/ButtonForm'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2D435F',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: '#FFF',
        height: '70vh',
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
            fontSize: 20
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
    HeaderQuiz: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TitleQuestion: {
        fontSize: 20
    },
    forms: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '70%'
    }

}));


export default function HomeQuestion() {
    const classes = useStyles();
    const [amountQuest, setAmountQuest] = useState(0)
    let history = useHistory();


    async function handleNextStep() {
        console.log(amountQuest)
        history.push("/Confirm");
    }

    return (
        <ThemeProvider>
            <div className={classes.root}>
                <form className={classes.forms} noValidate autoComplete="off">
                    <h1>Select how many questions do you want to answer?</h1>
                    <Input required type="number" id="amountQuest" value={amountQuest} onChange={(event) => setAmountQuest(event.target.value)} />
                    <ButtonForm labelButton={'Avan??ar'} onClick={() => handleNextStep(amountQuest)} />
                </form>
            </div>
        </ThemeProvider>

    )
}