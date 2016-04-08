import React, { PropTypes } from 'react'
import { Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'

const sharedPropTypes = {
    children: PropTypes.node.isRequired
}

const Page = ({ children }) =>
    <Flex
        column
        justify="center"
        mt={4}
    >
        {children}
    </Flex>

Page.propTypes = {
    ...sharedPropTypes
}

const Title = ({ children }) =>
    <Heading
        level={1}
        mb={2}
        style={{ textAlign: 'center' }}
    >
        {children}
    </Heading>

Title.propTypes = {
    ...sharedPropTypes
}

Page.Title = Title

const Subtitle = ({ children }) =>
    <Text
        mb={2}
        style={{ textAlign: 'center' }}
    >
        {children}
    </Text>

Subtitle.propTypes = {
    ...sharedPropTypes
}

Page.Subtitle = Subtitle

export default Page
