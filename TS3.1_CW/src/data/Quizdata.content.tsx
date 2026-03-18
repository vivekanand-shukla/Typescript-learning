export const QuizData: {
  question: string
  options: string[]
  correctOption: number
}[] = []

// fetch 10 questions from API
fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  .then(res => res.json())
  .then(data => {
    const formatted = data.results.map((q: any) => {
      const options = [...q.incorrect_answers]

      // random correct answer position
      const correctIndex = Math.floor(Math.random() * 4)
      options.splice(correctIndex, 0, q.correct_answer)

      return {
        question: q.question,
        options: options,
        correctOption: correctIndex
      }
    })

    // fill exported array (IMPORTANT 🔥)
    QuizData.push(...formatted)
  })
  .catch(err => {
    console.error("Error fetching quiz:", err)
  })