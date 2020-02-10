import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

const Intro = () => {
  return (
    <CardContent>
      <Typography variant="h1" gutterBottom>
        Hi, I&apos;m Brennan
      </Typography>
      <Typography variant="body1" gutterBottom>
        I&apos;m a Full Stack Software Engineer.
      </Typography>
    </CardContent>
  )
}

export default Intro
