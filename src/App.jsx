import { useState } from 'react'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello </h1>
    <Footer />
    </>
  )
}

export default App
