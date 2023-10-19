import { useState } from 'react'
import Info from './Component/Info.jsx'
import About from './Component/About.jsx'
import Interests from './Component/Interests.jsx'
import Footer from './Component/Footer.jsx'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
     
    </>
  )
}

export default App
