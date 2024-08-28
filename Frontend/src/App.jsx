import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import EmptyVideoPage from './Components/EmptyVideoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmptyVideoPage/>
    </>
  )
}

export default App
