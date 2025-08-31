import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Question1 from "@/pages/Question1"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question-1" element={<Question1 />} />
        {/* <Route path="/question-2" element={<Question2 />} />
        <Route path="/question-3" element={<Question3 />} />
        <Route path="/question-4" element={<Question4 />} />
        <Route path="/question-5" element={<Question5 />} />
        <Route path="/question-6" element={<Question6 />} />
        <Route path="/question-7" element={<Question7 />} /> */}
      </Routes>
    </div>
  )
}


export default App
