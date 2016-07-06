import { default as React } from 'react'
import { Error404, PageHeader } from 'components'
import { default as Helmet } from 'react-helmet'
import { Block, Container } from 'rebass'
import { default as data } from './data'
import { find } from 'lodash'
import { default as PortfolioItem } from './PortfolioItem'
import { Link } from 'react-router'

const PortfolioItemPage = ({ params: { slug } }) => {
  const item = find(data, { slug })
  if (!item) {
    return <Error404 />
  }
  return (
    <div>
      <Helmet
        meta={[
          {
            name: 'description',
            content: 'Benjamin Tatum professional sotware development website portfolio'
          }
        ]}
        title={`Portfolio - ${item.name}`}
      />
      <PageHeader
        heading={item.name}
        breadcrumbs={[
          { children: 'Home', is: Link, to: '/' },
          { children: 'Portfolio', is: Link, to: '/portfolio' },
          { children: item.name, is: Link, to: `/portfolio/${item.slug}` }
        ]}
      />
      <Block backgroundColor='white'>
        <Container>
          <PortfolioItem {...item} />
        </Container>
      </Block>
    </div>
  )
}

export default PortfolioItemPage
