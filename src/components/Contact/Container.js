/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Form } from '.'
import { Page, TopBar } from '..'
import Helmet from 'react-helmet'

const ContactContainer = () =>
    <Page>
        <Helmet
            meta={[
                {
                    name: 'description',
                    content: 'Contact Benjamin Tatum for website, application and software development project quotes' // eslint-disable-line max-len
                },
            ]}
            title="Contact"
        />
        <TopBar/>
        <Page.Title>
            How can I help?
        </Page.Title>
        <Page.Subtitle>
            I build enterprise scale applications.<br/>
            Contact me today for a quote on your project.
        </Page.Subtitle>
        <Page.Content>
            <Form/>
        </Page.Content>
    </Page>

export default ContactContainer
