import React from 'react'
import { Heading } from 'rebass'
import { Flex } from 'reflexbox'
import { PhotoGallery } from '.'

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
                textAlign: "center"
            }}
        >
            Ann Arbor Pictures
        </Heading>
        <PhotoGallery/>
    </Flex>

export default Home
