import { Link } from "react-router-dom"
import questions from "../data/Questions"

function Home() {
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
                className="default-card-content">
                {question.title}
              </Link>
            ))}
        </div>
      </>
  
    )
  }
  
  export default Home
  