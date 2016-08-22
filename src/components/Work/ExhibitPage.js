
import { find } from 'lodash'
import { Flex } from 'reflexbox'
import { Error404 } from 'components'
import { Base, Heading } from 'rebass'
import { default as data } from './data'
import { default as React } from 'react'

const ExhibitPage = ({ params: { slug } }) => {
  const project = find(data, { slug })

  if (!project) {
    return <Error404 />
  }

  const { backgroundColor, color, name, heading } = project

  return (
    <Base
      is={Flex}
      color={color}
      align='center'
      justify='center'
      backgroundColor={backgroundColor}
      style={{ minHeight: '25vh' }}
    >
      <Heading {...heading}>
        {name}
      </Heading>
    </Base>
  )
}

export default ExhibitPage
