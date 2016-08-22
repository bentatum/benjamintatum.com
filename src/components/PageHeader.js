
import { Reflex } from 'reflexbox'
import { Breadcrumbs, Heading } from 'rebass'
import { default as React, PropTypes } from 'react'

const PageHeader = ({ breadcrumbs, heading, ...props }) =>
  <div {...props}>
    <Heading level={2} {...heading} style={{ textAlign: 'center' }} />
    <If condition={breadcrumbs}>
      <Breadcrumbs {...breadcrumbs} />
    </If>
  </div>

PageHeader.propTypes = {
  breadcrumbs: PropTypes.shape({
    links: PropTypes.arrayOf(PropTypes.object)
  }),
  heading: PropTypes.shape({
    children: PropTypes.string.isRequired
  })
}

export default Reflex(PageHeader)
