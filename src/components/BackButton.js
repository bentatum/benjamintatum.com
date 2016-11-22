
import React from 'react'
import { Button } from 'rebass'
import BackIcon from 'react-icons/lib/md/chevron-left'
import getContext from 'recompose/getContext'

const enhance = getContext({
  router: React.PropTypes.object
})

export default enhance(props =>
  <Button
    px={0}
    backgroundColor='white'
    color='black'
    onClick={() => props.router.goBack()}>
    <BackIcon />
  </Button>
)
