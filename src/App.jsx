import { useState } from 'react'
import './App.css'
import Back from './components/Back'
import Front from './components/Front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>Take Notes</div> */}
    <Back/>
    <Front/>
    </>
  )
}

export default App
