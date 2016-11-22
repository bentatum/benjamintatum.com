
import React from 'react'
import { Button } from 'rebass'
import BackIcon from 'react-icons/lib/md/chevron-left'
import getContext from 'recompose/getContext'

const enhance = getContext({
  history: React.PropTypes.object
})

export default enhance(props =>
  <Button
    backgroundColor='white'
    color='black'
    onClick={() => props.history.goBack()}>
    <BackIcon />
  </Button>
)
