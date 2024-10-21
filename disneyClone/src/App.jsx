import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import './tailwind.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <Header />

      </h1>
    </>
  )
}

export default App
