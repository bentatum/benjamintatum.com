
import React from 'react'
import { Button } from 'rebass'
import BackIcon from 'react-icons/lib/md/chevron-left'
import getContext from 'recompose/getContext'

const enhance = getContext({
  history: React.PropTypes.object
})

export default enhance(props =>
  <Button
    px={0}
    color='black'
    backgroundColor='white'
    onClick={() => props.history.goBack()}>
    <BackIcon />
  </Button>
)
