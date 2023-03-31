import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Cards from './Component/Cards/Cards'
import { Toaster } from 'react-hot-toast'
import QuestionAns from './Component/QandA/QuestionAns'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
      <QuestionAns></QuestionAns>
      <Toaster></Toaster>
    </div>
  )
}

export default App
