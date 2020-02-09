import React, { useState } from 'react'
import { css } from 'emotion'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { ExpandMore } from '@material-ui/icons'

const styles = css`
  width: 50rem;

  .MuiTypography-h1 {
    font-size: 2rem;
  }
`

const expand = css`
  .MuiSvgIcon-root {
    transform: rotate(0deg);
    margin-left: 'auto';
    transition: all 3s;
    transition: transform 0.25s ease-in-out;
  }
`

const expandOpen = css`
  .MuiSvgIcon-root {
    transform: rotate(180deg);
    transition: transform 0.25s ease-in-out;
  }
`

const actionRowStyles = css`
  display: flex;
  justify-content: center;
`

const BorderBox = () => {
  const [visibleState, setVisibleState] = useState(0)

  const cycleVisibility = () => {
    setVisibleState(state => {
      return state === 2 ? 0 : state + 1
    })
  }

  const actionLabel = visibleState === 2 ? 'Hide' : 'Learn More'

  return (
    <Card className={styles}>
      <CardContent>
        <Typography variant="h1" gutterBottom>
          Hi, I&apos;m Brennan
        </Typography>
        <Typography variant="body1" gutterBottom>
          I write javascript
        </Typography>
      </CardContent>

      <Collapse in={visibleState > 0} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            I write javascript I write javascript I write javascript I write
            javascript I write javascript I write javascript I write javascript
            I write javascript I write javascript
          </Typography>
        </CardContent>
      </Collapse>

      <Collapse in={visibleState > 1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            I write javascript I write javascript I write javascript I write
            javascript I write javascript I write javascript I write javascript
            I write javascript I write javascript
          </Typography>
        </CardContent>
      </Collapse>

      <CardActions className={actionRowStyles}>
        <IconButton
          className={visibleState === 2 ? expandOpen : expand}
          onClick={cycleVisibility}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BorderBox
