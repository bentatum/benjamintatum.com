/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Base } from 'rebass'
import { Flex } from 'reflexbox'
import { connect } from 'react-redux'

const photos = [
    '51QcRqMjy6w',
    'v3QeAZjxxtY',
    'EeDaZ4So3R0',
    'bNGdS51jAoE',
    '70RHiKO9kj8',
    'C7gNqbkKOtE',
    'm5lNqXBBIy0',
    'yB-fV93YL54',
    '7bVMdNYzH_8',
    '_BLx6ystEhk',
    'pcbuJpqHUak',
    'jjj1rHyYyG0'
]

@connect((state) => ({ width: state.app.width }))

export default class PhotoGallery extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    render() {
        // const { width } = this.props
        // const imgSize = width > small ? 280 : 100
        return (
            <Base {...this.props}>
                <Flex
                    justify="center"
                    wrap
                >
                    <For
                        each="photo"
                        index="key"
                        of={photos}
                    >
                        <Base
                            key={key}
                            style={{
                                backgroundImage: `url('//source.unsplash.com/${photo}/280x280')`,
                                backgroundSize: 'cover',
                                height: 87,
                                width: 87,
                            }}
                        />
                    </For>
                </Flex>
            </Base>
        )
    }
}
