/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Heading } from 'rebass'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { Form } from '.'

@connect((state) => ({ width: state.app.width }))

export default class ContactContainer extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    }

    render() {
        const imgSize = 280
        return (
            <div>
                <Heading
                    level={1}
                    my={2}
                    style={{ textAlign: 'center' }}
                >
                    Get quotes from photographers in Ann Arbor
                </Heading>
                <Flex column>
                    <Flex
                        justify="center"
                        mb={2}
                    >
                        <div
                            style={{
                                backgroundImage: `url('//source.unsplash.com/random/${imgSize}x${imgSize}')`, // eslint-disable-line max-len
                                height: imgSize,
                                width: imgSize
                            }}
                        />
                    </Flex>
                    <Box>
                        <Form/>
                    </Box>
                </Flex>
            </div>
        )
    }
}
