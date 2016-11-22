
import { breakpoints } from 'theme'
import { default as Joi } from 'joi'
import { connect } from 'react-redux'
import { Form, Input } from 'joiful-react-forms'
import { Heading, Button, Text } from 'rebass'
import { Page } from 'components/page'
import { BackButton, PrimaryNav, StatusIndicator } from 'components'
import { submitLead, SUBMIT_LEAD } from 'redux/modules/app'
import { default as React, Component, PropTypes } from 'react'

@connect(
  ({ await: { statuses } }) => ({
    status: statuses[SUBMIT_LEAD]
  }),
  { submit: submitLead }
)
export default class Contact extends Component {

  static propTypes = {
    status: PropTypes.oneOf(['pending', 'success', 'failure']),
    submit: PropTypes.func.isRequired
  };

  static contextTypes = {
    colors: PropTypes.object.isRequired
  };

  state = {
    name: '',
    email: '',
    message: ''
  };

  handleSubmit (err, values) {
    this.setState(values)
    if (err) {
      return
    }
    this.props.submit(values)
  }

  handleChange ({ target: { value, name } }) {
    this.setState({ [name]: value })
  }

  render () {
    const { status } = this.props
    return (
      <Page
        navbar={{
          nav: <PrimaryNav />,
          leftComponent: <BackButton />,
          centerComponent: <Heading>Contact</Heading>
        }}>
        <Text mb={3} style={{ textAlign: 'center' }}>
          Need help on your next project?
          <br />
          Send me a message and I'll get back to you as soon as I can.
        </Text>
        <Form
          onSubmit={::this.handleSubmit}
          schema={{
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            message: Joi.string().required()
          }}
          values={this.state}
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
            disabled={status === 'pending' || status === 'success'}
          >
            <Choose>
              <When condition={status}>
                <StatusIndicator
                  status={status}
                  messages={{
                    success: 'Thanks!'
                  }}
                  indicatorProps={{
                    pending: {
                      color: this.context.colors.white
                    }
                  }}
                />
              </When>
              <Otherwise>
                Submit
              </Otherwise>
            </Choose>
          </Button>
        </Form>
      </Page>
    )
  }
}
