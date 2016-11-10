
import { Reflex } from 'reflexbox'
import { default as React } from 'react'
import { Input as RebassInput } from 'rebass'

const Input = ({ error, ...props }) =>
  <RebassInput
    invalid={error}
    message={error}
    {...props}
  />

export default Reflex(Input)
