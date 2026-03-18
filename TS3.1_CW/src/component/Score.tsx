import React from 'react'
import "./score.css"
interface ScoreProps {
    currentScore: number,
    totalScore : number
}

const Score : React.FC<ScoreProps> = ({currentScore , totalScore}) => {
  return (
    <div>

        <p>score : {currentScore}/{totalScore}</p>
    </div>
  )
}

export default Score