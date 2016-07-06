import { default as React, PropTypes, Component } from 'react'
import { Breadcrumbs, Container, Heading } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class PageHeader extends Component {

  static propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.object),
    heading: PropTypes.string.isRequired,
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const { breadcrumbs, heading, screenSize } = this.props
    const isMobile = screenSize === 'small' || screenSize === 'medium'
    return (
      <Flex
        is={Container}
        align='center'
        justify='space-between'
        style={{ minHeight: 120 }}
        wrap
      >
        <Box col={isMobile ? 12 : 8} py={1}>
          <Heading level={2} size={1} children={heading} />
        </Box>
        <If condition={breadcrumbs}>
          <Box py={1}>
            <Breadcrumbs links={breadcrumbs} />
          </Box>
        </If>
      </Flex>
    )
  }
}
