import React, { Component, PropTypes } from 'react'
import { Base, Heading } from 'rebass'
import { connect } from 'react-redux'
import { constants as appConstants } from '../../redux/modules/app'
const { small } = appConstants.BREAKPOINTS
import { Flex, Box } from 'reflexbox'

@connect((state) => ({
    width: state.app.width
}))

export default class PortfolioPiece extends Component {

    static propTypes = {
        address: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        screenShot: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired
    };

    render() {
        const { ...props, address, name, screenShot, width } = this.props
        if (!width) { return null }
        return (
            <Base {...props}>
                <Flex
                    align="center"
                    column
                >
                    <Box p={2}>
                        <Heading
                            level={3}
                            mb={2}
                        >
                            <a
                                href={address}
                                target="_blank"
                            >
                                {name}
                            </a>
                        </Heading>
                    </Box>
                    <Base
                        p={2}
                        style={{
                            borderRadius: 5,
                            width: width > small ? 300 : '100%'
                        }}
                    >
                        <a
                            href={address}
                            target="_blank"
                        >
                            <div
                                style={{
                                    backgroundImage: `url('${screenShot}')`,
                                    backgroundPosition: 'top center',
                                    backgroundSize: 'cover',
                                    boxShadow: '0 0 18px 4px rgba(0, 0, 0, 0.1)',
                                    height: 275,
                                    width: '100%'
                                }}
                            />
                        </a>
                    </Base>
                </Flex>
            </Base>
        )
    }
}
