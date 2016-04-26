import { default as React, PropTypes } from 'react'
import { Badge, Base, Heading } from 'rebass'
import { Flex } from 'reflexbox'
import { default as BadgeList } from './BadgeList'

const OrgCard = ({ ...base, duration, organization, technologies, title }) =>
  <Base {...base}>
    <Base mb={1}>
      <Flex column>
        <Heading
          level={4}
          mb={2}
        >
          {title} @ {organization}
        </Heading>
        <Badge mb={2}>
          {duration}
        </Badge>
      </Flex>
    </Base>
    <BadgeList list={technologies}/>
  </Base>

OrgCard.propTypes = {
  duration: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default OrgCard
