import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Cards from './Component/Cards/Cards'
import { Toaster } from 'react-hot-toast'
import Blog from './Component/Blog/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Cards></Cards>
      <Blog></Blog>
      <Toaster></Toaster>
    </div>
  )
}

export default App
