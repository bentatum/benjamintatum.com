
import React from 'react'
import { Flex } from 'reflexbox'
import { Page } from 'components/page'
import { PrimaryNav } from 'components'
import { IndexLink } from 'react-router'
import getContext from 'recompose/getContext'
import { Text, Heading, Avatar } from 'rebass'

const enhance = getContext({
  colors: React.PropTypes.object,
  media: React.PropTypes.arrayOf(React.PropTypes.string)
})

export default enhance(props =>
  <Page>
    <Flex mt={4} flexColumn align='center'>
      <Flex mb={1}>
        <If condition={props.media.indexOf('xsmall') === -1}>
          <Avatar mr={1} circle size={50} src='//media.benjamintatum.com/benjamin-tatum.jpg' />
        </If>
        <Heading level={1} m={0} style={{ textAlign: 'center' }}>
          <IndexLink to='/' style={{ color: props.colors.black }}>
            Ben Tatum
          </IndexLink>
        </Heading>
      </Flex>
      <Text px={2} mb={3} style={{ textAlign: 'center' }}>
        Passionate leader & full stack developer in Ann Arbor, Michigan
      </Text>
      <PrimaryNav />
    </Flex>
  </Page>
)
