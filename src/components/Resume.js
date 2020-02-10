import React, { useState, useRef, useEffect } from 'react'
import { css } from 'emotion'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import { ExpandMore } from '@material-ui/icons'
import Jobs from './Sections/Jobs'
import Education from './Sections/Educatation'
import Skills from './Sections/Skills'
import Intro from './Sections/Intro'
import CollapsableSection from './CollapsableSection'

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

const Resume = () => {
  const [visibleState, setVisibleState] = useState(0)
  const introRef = useRef(null)
  const jobsRef = useRef(null)
  const educationRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const scrollToActive = () => {
      const refs = [introRef, jobsRef, educationRef, skillsRef]
      const ref = refs[visibleState]
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const scrollInterval = setInterval(() => scrollToActive(), 1)
    setTimeout(() => clearInterval(scrollInterval), 150)
  }, [visibleState])

  const cycleVisibility = () => {
    const collapsableSectionsCount = 3
    setVisibleState(state => {
      const newState = state === collapsableSectionsCount ? 0 : state + 1
      return newState
    })
  }

  const showJobs = visibleState > 0
  const showEducation = visibleState > 1
  const showSkills = visibleState > 2

  return (
    <Card className={styles} ref={introRef}>
      <Intro />

      <CollapsableSection open={showJobs}>
        <Jobs ref={jobsRef} />
      </CollapsableSection>

      <CollapsableSection open={showEducation}>
        <Education ref={educationRef} />
      </CollapsableSection>

      <CollapsableSection open={showSkills}>
        <Skills ref={skillsRef} />
      </CollapsableSection>

      <CardActions className={actionRowStyles}>
        <IconButton
          className={visibleState === 3 ? expandOpen : expand}
          onClick={cycleVisibility}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Resume
