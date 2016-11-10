
import { Reflex } from 'reflexbox'
import { default as React } from 'react'
import { ThreeBounce } from 'better-react-spinkit'

const Loading = (props) =>
  <ThreeBounce {...props} />

export default Reflex(Loading)
