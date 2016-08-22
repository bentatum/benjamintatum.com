
import { Reflex } from 'reflexbox'
import { default as React } from 'react'
import { Textarea as RebassTextarea } from 'rebass'

const Textarea = ({ error, ...props }) =>
  <RebassTextarea
    invalid={error}
    message={error}
    {...props}
  />

export default Reflex(Textarea)
