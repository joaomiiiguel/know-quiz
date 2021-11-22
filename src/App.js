import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';

import api from './services/api'

import HomeQuestion from './page/HomeQuestion'


function App() {
  const [dataQuiz, setDataQuiz] = useState([])
  const [amountQuest, setAmountQuest] = useState(10)

  async function loadQuestions() {
    let amountQuestions = `?amount=${amountQuest}&category=9&difficulty=easy&type=multiple`

    const responseAmount = await api.get(amountQuestions)
      .then(responseAmount => {
        setDataQuiz(responseAmount.data.results)
      })
      console.log(dataQuiz)
  }


  useEffect(() => {
    loadQuestions()
  }, [])

  return (
    <div className="App">
      <HomeQuestion/>
    </div>
  );
}

export default App;
