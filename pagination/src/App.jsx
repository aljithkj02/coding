import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <Products />
    </div>
  )
}

export default App
