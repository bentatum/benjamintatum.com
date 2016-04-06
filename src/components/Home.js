import React from 'react'
import { Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import { PhotoGallery } from '.'
import { Form } from './Contact'

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
            Ann Arbor Pictures
        </Heading>
        <Text
            mb={2}
            style={{
                textAlign: 'center'
            }}
        >
            Leave your name and contact information and
            we will connect you with real photographers
            in Ann Arbor, Michigan.
        </Text>
        <Form
            mb={3}
            mt={1}
            p={2}
        />
        <PhotoGallery mb={4}/>
    </Flex>

export default Home
