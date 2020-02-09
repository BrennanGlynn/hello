import React from 'react'
import './App.css'
import { css } from 'emotion'
import BorderBox from './components/BorderBox'

const styles = css`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <div className={styles}>
      <BorderBox />
    </div>
  )
}

export default App
