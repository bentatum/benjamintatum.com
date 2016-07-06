import { default as React } from 'react'
import { PageHeader, Portfolio } from 'components'
import { default as Helmet } from 'react-helmet'
import { Block, Container } from 'rebass'
import { Link } from 'react-router'

const PortfolioPage = () =>
  <div>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Benjamin Tatum professional sotware development website portfolio'
        }
      ]}
      title='Portfolio'
    />
    <PageHeader
      heading='Portfolio'
      breadcrumbs={[
        { children: 'Home', is: Link, to: '/' },
        { children: 'Portfolio', is: Link, to: '/portfolio' }
      ]}
    />
    <Block backgroundColor='white'>
      <Container>
        <Portfolio />
      </Container>
    </Block>
  </div>

export default PortfolioPage
