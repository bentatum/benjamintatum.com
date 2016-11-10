
import React from 'react'
import posts from './posts'
import { Link } from 'react-router'
import { Page } from 'components/page'
import GoBackIcon from 'react-icons/lib/md/chevron-left'
import getContext from 'recompose/getContext'
import { fontFamilyBold } from 'theme'
import { Flex } from 'reflexbox'

const enhance = getContext({
  colors: React.PropTypes.object
})

export default enhance(props =>
  <Page
    header={{
      mb: 2,
      heading: {
        children: 'Articles'
      },
      leftComponent: (
        <Link to='/' style={{ color: props.colors.black, fontFamily: fontFamilyBold }}>
          <Flex align='center'>
            <GoBackIcon /> Go Back
          </Flex>
        </Link>
      )
    }}>
    {posts.map((post, key) =>
      <div
        key={key}
        dangerouslySetInnerHTML={{ __html: post }} />
    )}
  </Page>
)
