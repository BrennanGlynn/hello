import React from 'react'
import PropTypes from 'prop-types'
import Collapse from '@material-ui/core/Collapse'

const CollapsableSection = ({ children, open }) => {
  return (
    <Collapse in={open} timeout={150} unmountOnExit>
      {children}
    </Collapse>
  )
}

CollapsableSection.propTypes = {
  children: PropTypes.object,
  open: PropTypes.bool,
}

export default CollapsableSection
