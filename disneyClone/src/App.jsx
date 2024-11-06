import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import './tailwind.css'
import Header from './components/Header'
import '../src/css/output.css'
import Slider from './components/Slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[#040714] h-screen ">
        <Header />
        <Slider />
      </div>
    </>
  )
}

export default App
