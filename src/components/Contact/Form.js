/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react'
import { Button, Input } from 'rebass'
import { connect } from 'redux-await'
import { submitLead } from '../../redux/modules/app'
import autobind from 'autobind-decorator'

@connect(() => ({}), { submit: submitLead })

export default class ContactForm extends Component {

    static propTypes = {
        submit: PropTypes.func.isRequired
    }

    state = {}

    @autobind
    handleSubmit() {
        console.log('ok')
        this.props.submit(this.state)
    }

    @autobind
    handleChange({ target: { name, value } }) {
        this.setState({ [name]: value })
    }

    render() {
        const inputProps = {
            onChange: this.handleChange,
            type: 'text'
        }

        return (
            <div>
                <Input
                    {...inputProps}
                    label="Name"
                    name="name"
                    placeholder="First Last"
                />
                <Input
                    {...inputProps}
                    label="Email"
                    name="email"
                    placeholder="Email"
                />
                <Input
                    {...inputProps}
                    label="Phone"
                    name="phone"
                    placeholder="Phone number"
                />
                <Button onClick={this.handleSubmit}>
                    Submit
                </Button>
            </div>
        )
    }

}
