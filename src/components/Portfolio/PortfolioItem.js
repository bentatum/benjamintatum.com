import React, { PropTypes } from 'react'
import { Avatar, Base } from 'rebass'

const PortfolioItem = ({ name, img, slug, ...props }) => {
  const href = `/portfolio/${slug}`
  return (
    <Base style={{ textAlign: 'center' }}>
      <Base is='a' href={href} mb={1}>
        <Avatar
          circle={false}
          rounded
          src={img}
          size={500}
        />
      </Base>
    </Base>
  )
}

PortfolioItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default PortfolioItem
