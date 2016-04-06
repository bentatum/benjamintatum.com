import React from 'react'
import { Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import { Portfolio } from '.'

const Home = () =>
    <Flex
        column
        justify="center"
        mt={4}
    >
        <Heading
            level={1}
            mb={2}
            style={{
                textAlign: 'center'
            }}
        >
            Benjamin Tatum
        </Heading>
        <Text
            mb={2}
            style={{
                textAlign: 'center'
            }}
        >
            Software Developer<br/>
            Ann Arbor, Michigan
        </Text>
        <Portfolio/>
    </Flex>

export default Home
