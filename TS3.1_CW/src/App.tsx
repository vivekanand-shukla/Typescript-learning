import React, { useState } from 'react'
import Header from './component/Header'
import Quiz from './component/Quiz';
import Score from './component/Score';
import{ QuizData} from "./data/Quizdata.content"
import {checkAnswer} from "./utils/CheckAns"





const App = () => {
  
const [ currentQuestionIndex ,setCurrentQuestionIndex] = useState<number>(0)
const [score,setScore]= useState<number>(0)


const handleOptionClick = (selectedOption : number)=>{
  const currentQuiz  = QuizData[currentQuestionIndex]
 if(checkAnswer(selectedOption , currentQuiz.correctOption )){
  setScore(score+1)
 }
 setCurrentQuestionIndex(currentQuestionIndex+1)
}
  return (
    <div>
       <Header title={"Quiz App"}/> 
      
      {currentQuestionIndex < QuizData.length ? (

        <Quiz quiz={QuizData[currentQuestionIndex]} onOptionClick={handleOptionClick}/>
      )
      : (<Score currentScore={score} totalScore={QuizData.length}/>)}
    </div>
  )
}

export default App