import React, { Component, PropTypes } from 'react'
import { connect } from 'redux-await'
import { constants } from '../../redux/modules/app'
const { SUBMIT_LEAD } = constants
import { push } from 'react-router-redux'
import { Button } from 'rebass'
import { Page, TopBar } from '..'

@connect(() => ({}), { pushState: push })

export default class ContactSuccess extends Component {

    static propTypes = {
        pushState: PropTypes.func.isRequired,
        statuses: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props)
        const { pushState, statuses } = props
        if (statuses[SUBMIT_LEAD] !== 'success') {
            pushState('/contact')
        }
    }

    render() {
        return (
            <Page>
                <TopBar/>
                <Page.Title>
                    Thank you!
                </Page.Title>
                <Page.Subtitle>
                    Your message went to my personal email.<br/>
                    I'll do my best to respond in a timely manner.
                </Page.Subtitle>
                <Page.Content>
                    <Button
                        color="default"
                        onClick={() => this.props.pushState('/')}
                        style={{ width: '100%' }}
                    >
                        Go back
                    </Button>
                </Page.Content>
            </Page>
        )
    }
}
