import React, { Component, PropTypes } from 'react'
import { Button } from 'rebass'
import { connect } from 'redux-await'
import { createLead } from '../../redux/modules/app'
import autobind from 'autobind-decorator'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import Joi from 'joi'
import joiFulFormSettings from '../JoifulReactForms'

@connect(() => ({}), { submit: createLead })

export default class ContactForm extends Component {

    static propTypes = {
        submit: PropTypes.func.isRequired
    }

    state = {}

    @autobind
    handleSubmit(error) {
        if (error) {
            return false
        }

        return this.props.submit(this.state)
    }

    @autobind
    handleChange(event, formValues) {
        this.setState(formValues)
    }

    render() {
        return (
            <JoifulForm
                {...joiFulFormSettings}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                schema={{
                    name: Joi.string().required().label('Name'),
                    email: Joi.string().email().required().label('Email'),
                    phone: Joi.string().min(10).max(12).label('Phone')
                }}
                values={this.state}
            >
                <JoifulInput fieldName="name"/>
                <JoifulInput fieldName="email"/>
                <JoifulInput fieldName="phone"/>
                <Button
                    onClick={this.handleSubmit}
                    style={{
                        width: '100%'
                    }}
                >
                    Submit
                </Button>
            </JoifulForm>
        )
    }

}
