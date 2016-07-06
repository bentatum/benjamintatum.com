import { default as React, Component, PropTypes } from 'react'
import { default as Helmet } from 'react-helmet'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { SUBMIT_LEAD, createLead } from 'redux/modules/app'
import { Container, Heading, Text } from 'rebass'

@connect(
  ({ app: { screenSize } }) => ({ screenSize }),
  { submit: createLead }
)

export default class Contact extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    statuses: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
  };

  render () {
    const { statuses, submit } = this.props
    const { small } = this.context.breakpoints
    return (
      <div>
        <Helmet
          meta={[
            {
              name: 'description',
              content: 'Contact Benjamin Tatum for website, application and software development project quotes' // eslint-disable-line max-len
            }
          ]}
          title='Contact'
        />
        <Container>
          <Heading>
            How can I help?
          </Heading>
          <Text>
            I build enterprise scale applications.<br />
            Contact me today for a quote.
          </Text>
          <LeadForm
            status={statuses[SUBMIT_LEAD]}
            submit={submit}
            style={{
              margin: 'auto',
              maxWidth: small
            }}
          />
        </Container>
      </div>
    )
  }
}
