import { useState } from 'react'
import OlMap from './components/OlMap';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <OlMap />
  )
}

export default App