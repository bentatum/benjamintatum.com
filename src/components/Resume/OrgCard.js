import React, { Component, PropTypes } from 'react'
import { Badge, Base, Heading } from 'rebass'
import { Flex } from 'reflexbox'
import BadgeList from './BadgeList'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class OrgCard extends Component {

  static contextTypes = {
    breakpoints: PropTypes.object
  };

  static propTypes = {
    duration: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
  };

  render () {
    const {
      ...base,
      duration,
      organization,
      technologies,
      title,
      width
    } = this.props

    const { small } = this.context.breakpoints

    return (
      <Base {...base}>
        <Base mb={1}>
          <Flex
            align={width <= small ? 'flex-start' : 'center'}
            column={width <= small}
            justify={width > small ? 'space-between' : null}
          >
            <Heading
              level={4}
              mb={width <= small ? 2 : 0}
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
    )
  }
}
