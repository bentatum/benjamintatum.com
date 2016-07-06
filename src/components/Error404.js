import { default as React } from 'react'
import { PageHeader } from 'components'
import { default as Helmet } from 'react-helmet'

const Error404 = () =>
  <div>
    <Helmet
      meta={[
        {
          name: '404',
          content: 'This page does not exist.'
        }
      ]}
      title='404'
    />
    <PageHeader heading='404' />
  </div>

export default Error404
