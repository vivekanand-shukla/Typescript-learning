import  { useState, useEffect } from 'react'
import Header from './component/Header'
import Quiz from './component/Quiz';
import Score from './component/Score';
import{ QuizData} from "./data/Quizdata.content"
import {checkAnswer} from "./utils/CheckAns"
import "./index.css"
import "./App.css"
//TS3.1_CW



const App = () => {
  
const [ currentQuestionIndex ,setCurrentQuestionIndex] = useState<number>(0)
const [score,setScore]= useState<number>(0)
const [, setRefresh] = useState(0)

const handleOptionClick = (selectedOption : number)=>{
  const currentQuiz  = QuizData[currentQuestionIndex]
 if(checkAnswer(selectedOption , currentQuiz.correctOption )){
  setScore(score+1)
 }
 setCurrentQuestionIndex(currentQuestionIndex+1)
}


useEffect(() => {
  const interval = setInterval(() => {
    if (QuizData.length > 0) {
      setRefresh(prev => prev + 1)
      clearInterval(interval)
    }
  }, 200)

  return () => clearInterval(interval)
}, [])
  return (
  <div className="app-container">
    <Header title={"Quiz App"} />

    {QuizData.length === 0 ? (
      <p>Loading...</p>
    ) : currentQuestionIndex < QuizData.length ? (
      <Quiz
        quiz={QuizData[currentQuestionIndex]}
        onOptionClick={handleOptionClick}
      />
    ) : (
      <Score currentScore={score} totalScore={QuizData.length} />
    )}
  </div>
)
}

export default App