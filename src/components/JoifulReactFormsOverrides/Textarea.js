import React, { PropTypes } from 'react'
import { Textarea } from 'rebass'

const JoifulInputTextarea = ({ error, ...props }, { rebass: { colors } }) =>
  <Textarea
    {...props}
    message={error}
    style={{
      borderColor: error ? colors.warning : colors.black
    }}
  />

JoifulInputTextarea.propTypes = {
  error: PropTypes.string
}

JoifulInputTextarea.contextTypes = {
  rebass: PropTypes.object.isRequired
}

export default JoifulInputTextarea
