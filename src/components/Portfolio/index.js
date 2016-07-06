import { default as React, Component, PropTypes } from 'react'
import { default as PortfolioItemThumbnail } from './PortfolioItemThumbnail'
import { Flex } from 'reflexbox'
import { connect } from 'react-redux'
import { default as data } from './data'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class Portfolio extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
  };

  render () {
    const isSmall = this.props.screenSize === 'small'
    return (
      <Flex wrap>
        {data.map((props, key) =>
          <PortfolioItemThumbnail
            key={key}
            style={{
              width: isSmall ? '100%' : 'auto'
            }}
            {...props}
          />
        )}
      </Flex>
    )
  }
}
