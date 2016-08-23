
import { find } from 'lodash'
import { Flex } from 'reflexbox'
import { Error404 } from 'components'
import { default as data } from './data'
import { default as React } from 'react'
import { Base, Container, Heading } from 'rebass'

const ExhibitPage = ({ params: { slug } }) => {
  const project = find(data, { slug })
  const content = require(project.content)

  if (!project || !content) {
    return <Error404 />
  }

  const { base, name, heading, logo } = project

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
        <Flex align='center'>
          <Base mr={1} {...logo} />
          <Heading {...heading}>
            {name}
          </Heading>
        </Flex>
      </Base>
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default ExhibitPage
