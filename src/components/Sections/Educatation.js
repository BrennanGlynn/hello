import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

// eslint-disable-next-line react/display-name
const Education = React.forwardRef((props, ref) => {
  return (
    <CardContent ref={ref}>
      <Typography variant="h2" gutterBottom>
        Education
      </Typography>
      <Typography variant="body1" gutterBottom>
        I write javascript I write javascript I write javascript I write
        javascript I write javascript I write javascript I write javascript I
        write javascript I write javascript
      </Typography>
    </CardContent>
  )
})

export default Education
