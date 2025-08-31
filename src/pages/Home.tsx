import { Link } from "react-router-dom"
import questions from "../data/Questions"
import type { Question } from "../types/Question"

function Home() {
    const onClickQuestion = (question: Question) => {
      console.log('click', question)
    }
    return (
      <>
        <div className="default-card">
          <h1>Questions</h1>
        </div>
        <div className="default-card">
            {questions.map((question) => (
              <Link
                to={question.path}
                key={question.id}
                onClick={() => onClickQuestion(question)}
                className="default-card-content">
                {question.title}
              </Link>
            ))}
        </div>
      </>
  
    )
  }
  
  export default Home
  