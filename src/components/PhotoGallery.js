import React from 'react'
import { Base } from 'rebass'
import { Flex } from 'reflexbox'

const photos = [
    '51QcRqMjy6w',
    'v3QeAZjxxtY',
    'EeDaZ4So3R0',
    'bNGdS51jAoE',
    '70RHiKO9kj8',
    'C7gNqbkKOtE',
    'm5lNqXBBIy0',
    'yB-fV93YL54',
    '7bVMdNYzH_8'
]

const PhotoGallery = () =>
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
                    height: 280,
                    width: 280,
                }}
            />
        </For>
    </Flex>

export default PhotoGallery
