import React, { PropTypes } from 'react'
import { Avatar, Base, Heading } from 'rebass'
import { Link } from 'react-router'

const PortfolioItemThumbnail = ({ name, img, slug, ...props }) => {
  const href = `/portfolio/${slug}`
  return (
    <Base style={{ textAlign: 'center' }}>
      <Base is={Link} to={href} mb={1}>
        <Avatar
          circle={false}
          rounded
          src={img}
          size={200}
        />
      </Base>
      <Heading is={Link} to={href} level={3}>
        {name}
      </Heading>
    </Base>
  )
}

PortfolioItemThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default PortfolioItemThumbnail
