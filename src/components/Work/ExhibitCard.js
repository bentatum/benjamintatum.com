
import { Flex } from 'reflexbox'
import { Link } from 'react-router'
import { Base, Heading } from 'rebass'
import { default as React, PropTypes } from 'react'

const ExhibitCard = ({ base, heading, path, name }) =>
  <Link to={path}>
    <Base py={2} is={Flex} justify='center' {...base}>
      <Heading {...heading}>
        {name}
      </Heading>
    </Base>
  </Link>

ExhibitCard.propTypes = {
  base: PropTypes.object,
  heading: PropTypes.object,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ExhibitCard
