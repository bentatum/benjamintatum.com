import React, { PropTypes } from 'react'
import { Input } from 'rebass'

const JoifulInputTextInput = ({ error, ...props }, { rebass: { colors } }) =>
    <Input
        {...props}
        message={error}
        style={{
            borderColor: error ? colors.warning : colors.black
        }}
        type="text"
    />

JoifulInputTextInput.propTypes = {
    error: PropTypes.string
}

JoifulInputTextInput.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default JoifulInputTextInput
