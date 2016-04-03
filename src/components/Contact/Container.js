import React from 'react'
import { Button, Heading, Input } from 'rebass'
import { Flex, Box } from 'reflexbox'

const imgSize = 400

const Contact = () =>
    <div>
        <Heading
            level={1}
            my={2}
            style={{
                textAlign: 'center'
            }}
        >
            Get quotes from photographers from Ann Arbor
        </Heading>
        <Flex column>
            <Flex justify="center">
                <div
                    style={{
                        backgroundImage: `url('//source.unsplash.com/random/${imgSize}x${imgSize}')`,
                        height: imgSize,
                        width: imgSize
                    }}
                />
            </Flex>
            <Box
                auto
                p={3}
            >
                <Input
                    label="Name"
                    name="name"
                    placeholder="First Last"
                    type="text"
                />
                <Input
                    label="Email"
                    name="email"
                    placeholder="Email"
                    type="text"
                />
                <Input
                    label="Phone"
                    name="phone"
                    placeholder="Phone number"
                    type="text"
                />
                <Button>
                    Submit
                </Button>
            </Box>
        </Flex>
    </div>

export default Contact
