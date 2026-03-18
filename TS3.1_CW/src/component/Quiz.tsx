import React from 'react'

interface QuizProps {
    quiz :{
        question: string,
        options:string[],
        correctOption?: number
    }
    onOptionClick :( selectedOption : number)=> void ;

}






const Quiz : React.FC<QuizProps>= ({quiz , onOptionClick}) => {
  return (
    <div>
        <p>{quiz.question}</p>
        <ul>{quiz.options.map((option ,i) =>(
            <li onClick={()=>onOptionClick(i)} key={i}>{option}</li>
        ) )}</ul>

    </div>
  )
}

export default Quiz