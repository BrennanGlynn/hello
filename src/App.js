import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Grow from '@material-ui/core/Grow'
import './App.css'

function App() {
  const [checked, setChecked] = useState(true)
  const toggleChecked = () => setChecked(checked => !checked)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleChecked}>Toggle</button>
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Typography variant="h1" component="h2" gutterBottom>
            Hi, I&apos;m Brennan
          </Typography>
        </Grow>
      </header>
    </div>
  )
}

export default App
