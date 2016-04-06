import React, { PropTypes } from 'react'
import { Input } from 'rebass'

const JoifulTextElementOverride = ({ error, ...props }, { rebass: { colors } }) =>
    <Input
        {...props}
        message={error}
        style={{
            borderColor: error ? colors.warning : colors.black
        }}
        type="text"
    />

JoifulTextElementOverride.propTypes = {
    error: PropTypes.string
}

JoifulTextElementOverride.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default JoifulTextElementOverride
