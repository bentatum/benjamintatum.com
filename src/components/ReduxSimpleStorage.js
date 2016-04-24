/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Input, NavItem, Pre, Text } from 'rebass'
import { STORE_TEXT, storeText } from 'redux/modules/simpleStorage'
import { connect } from 'react-redux'
import { default as canUseDOM } from 'can-use-dom'
import { Page, TopBar } from 'components'
import Helmet from 'react-helmet'

@connect(({ simpleStorage: { text } }) => ({ text }), { storeText })

export default class ReduxSimpleStorage extends Component {

    static propTypes = {
        storeText: PropTypes.func.isRequired,
        text: PropTypes.string
    };

    render() {
        return (
            <Page>
                <Helmet
                    meta={[
                        {
                            name: 'description',
                            content: `
                                Use redux simple storage to seamlessly store data in localStorage
                            `
                        },
                    ]}
                    title="Redux Simple Storage"
                />
                <TopBar
                    nav={
                        <div>
                            <NavItem
                                href="http://github.com/bentatum/redux-simplestorage"
                                is="a"
                                target="_blank"
                            >
                                Github
                            </NavItem>
                        </div>
                    }
                />
                <Page.Title>
                    Redux Simple Storage
                </Page.Title>
                <Page.Subtitle>
                    Seamless redux and localStorage
                </Page.Subtitle>
                <Page.Content>
                    <a
                        href="https://www.npmjs.com/package/redux-simplestorage"
                        target="_blank"
                    >
                        <Pre style={{ textAlign: 'center' }}>
                            npm i redux-simplestorage
                        </Pre>
                    </a>
                    <Input
                        hideLabel
                        label="Text"
                        name="text"
                        onChange={({ target: { value } }) =>
                            this.props.storeText(value)
                        }
                        placeholder="Your input will be stored."
                        style={{ textAlign: 'center' }}
                    />
                    <If condition={canUseDOM}>
                        <Text style={{ textAlign: 'center' }}>
                            {this.props.text || localStorage.getItem(STORE_TEXT)}
                        </Text>
                    </If>
                </Page.Content>
            </Page>
        )
    }
}
