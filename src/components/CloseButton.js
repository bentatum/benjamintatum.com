
import React from 'react'
import { Button } from 'rebass'
import CloseIcon from 'react-icons/lib/md/close'

export default props =>
  <Button
    px={0}
    backgroundColor='white'
    color='black'
    {...props}>
    <CloseIcon />
  </Button>
