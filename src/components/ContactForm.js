
import Joi from 'joi'
import { Button } from 'rebass'
import { breakpoints } from 'theme'
import { connect } from 'react-redux'
import withState from 'recompose/withState'
import { StatusIndicator } from 'components'
import getContext from 'recompose/getContext'
import { Form, Input } from 'joiful-react-forms'
import setPropTypes from 'recompose/setPropTypes'
import React, { Component, PropTypes } from 'react'
import { submitLead, SUBMIT_LEAD } from 'redux/modules/app'

@connect(
  ({ await: { statuses } }) => ({
    status: statuses[SUBMIT_LEAD]
  }),
  { submit: submitLead }
)
@withState('values', 'setValues', {})
@setPropTypes({
  status: PropTypes.oneOf(['pending', 'success', 'failure']),
  submit: PropTypes.func.isRequired
})
@getContext({
  colors: PropTypes.object.isRequired
})
export default class ContactForm extends Component {
  handleSubmit (err, values) {
    this.props.setValues(values)
    if (err) {
      return process.env.DEVELOPMENT && console.log(err, values)
    }
    this.props.submit(values)
  }

  handleChange ({ target: { value, name } }) {
    this.props.setValues({
      ...this.props.values,
      [name]: value
    })
  }

  render () {
    const { colors, values, status } = this.props
    return (
      <Form
        onSubmit={::this.handleSubmit}
        schema={{
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          message: Joi.string().required()
        }}
        values={values}
        onChange={::this.handleChange}
        style={{
          margin: 'auto',
          maxWidth: breakpoints.small
        }}>
        <Input name='name' />
        <Input name='email' />
        <Input name='message' is='textarea' />
        <Button
          type='submit'
          style={{ width: '100%' }}
          disabled={status === 'pending' || status === 'success'}>
          <Choose>
            <When condition={status}>
              <StatusIndicator
                status={status}
                messages={{
                  success: 'Thanks!'
                }}
                indicatorProps={{
                  pending: {
                    color: colors.white
                  }
                }} />
            </When>
            <Otherwise>
              Submit
            </Otherwise>
          </Choose>
        </Button>
      </Form>
    )
  }
}
