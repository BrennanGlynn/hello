import React from 'react'
import './App.css'
import { css } from 'emotion'
import Resume from './components/Resume'

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

function App() {
  return (
    <div className={styles}>
      <Resume />
    </div>
  )
}

export default App
