
import { Text } from 'rebass'
import { PageHeader } from 'components'
import { default as React } from 'react'

const Articles = () =>
  <div>
    <PageHeader
      heading={{
        children: 'Articles'
      }}
      mb={2}
    />
    <Text style={{ textAlign: 'center' }}>
      There are 0 articles here.
    </Text>
  </div>

export default Articles
