import React, { Component, PropTypes } from 'react'
import { Base, Button } from 'rebass'
import { connect } from 'redux-await'
import { createLead, constants } from '../../redux/modules/app'
import autobind from 'autobind-decorator'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import Joi from 'joi'
const { SUBMIT_LEAD } = constants
import { Flex } from 'reflexbox'
import { push } from 'react-router-redux'

@connect(
    (state) => ({
        formErrors: state.app.errors
    }),
    {
        pushState: push,
        submit: createLead
    }
)

export default class ContactForm extends Component {

    static propTypes = {
        formErrors: PropTypes.object,
        pushState: PropTypes.func.isRequired,
        statuses: PropTypes.object.isRequired,
        submit: PropTypes.func.isRequired
    };

    state = {}

    componentWillReceiveProps({ formErrors, pushState, statuses }) {
        if (formErrors) {
            return pushState('/contact/failure')
        }
        if (statuses[SUBMIT_LEAD] === 'success') {
            return pushState('/contact/success')
        }
        return false
    }

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
        const { statuses, ...props } = this.props
        const pending = statuses[SUBMIT_LEAD] === 'pending'
        return (
            <Base {...props}>
                <JoifulForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    schema={{
                        name: Joi.string().required(),
                        email: Joi.string().email().required(),
                        phone: Joi.string().min(10).max(12),
                        issue: Joi.string().min(3).required()
                    }}
                    values={this.state}
                >
                    <JoifulInput name="name"/>
                    <JoifulInput name="email"/>
                    <JoifulInput name="phone"/>
                    <JoifulInput
                        is="textarea"
                        label="How can I help?"
                        name="issue"
                        placeholder="Tell me about your project."
                    />
                    <Button
                        color="default"
                        disabled={pending}
                        onClick={this.handleSubmit}
                        style={{ width: '100%' }}
                    >
                        <If condition={pending}>
                            <Flex justify="center">
                                Processing...
                            </Flex>
                        <Else/>
                            Submit
                        </If>
                    </Button>
                </JoifulForm>
            </Base>
        )
    }

}
