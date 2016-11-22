
import React from 'react'
import data from './data'
import { find } from 'lodash'
import { Flex } from 'reflexbox'
import { Error404 } from 'components'
import { Base, Container, Heading } from 'rebass'
import getContext from 'recompose/getContext'

const enhance = getContext({
  colors: React.PropTypes.object
})

export default enhance(props => {
  const project = find(data, { slug: props.params.slug })
  const content = require(project.content)

  if (!project || !content) {
    return <Error404 />
  }

  const { base, name, heading, logo, link } = project

  return (
    <div>
      <Base
        mb={3}
        is={Flex}
        align='center'
        justify='center'
        style={{ minHeight: '25vh' }}
        {...base}
      >
        <a href={link}
          target='_blank'
          style={{ color: props.colors.white }}>
          <Flex align='center' py={3}>
            <Base mr={1} {...logo} />
            <Heading {...heading}>
              {name}
            </Heading>
          </Flex>
        </a>
      </Base>
      <div style={{ textAlign: 'center' }}>
        <Container dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
})
