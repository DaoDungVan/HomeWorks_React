import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseForm from './components/UseForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UseForm />
    </div>
  )
}

export default App
