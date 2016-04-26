/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { default as Helmet } from 'react-helmet'
import { Page, PrimaryNav, Navbar } from 'components'
import { default as LeadForm } from '@leadgrabr/lead-form'
import { connect } from 'redux-await'
import { SUBMIT_LEAD, createLead } from 'redux/modules/app'

@connect(() => ({}), { submit: createLead })

export default class Contact extends Component {

  static propTypes = {
    statuses: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
  };

  render () {
    const { statuses, submit } = this.props
    return (
      <Page>
        <Helmet
          meta={[
            {
              name: 'description',
              content: 'Contact Benjamin Tatum for website, application and software development project quotes' // eslint-disable-line max-len
            }
          ]}
          title='Contact'
        />
        <Navbar nav={<PrimaryNav/>}/>
        <Page.Title>
          How can I help?
        </Page.Title>
        <Page.Subtitle>
          I build enterprise scale applications.<br/>
          Contact me today for a quote.
        </Page.Subtitle>
        <Page.Content>
          <LeadForm
            status={statuses[SUBMIT_LEAD]}
            submit={submit}
          />
        </Page.Content>
      </Page>
    )
  }
}
