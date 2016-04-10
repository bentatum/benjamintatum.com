/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Form } from '.'
import { Page, TopBar } from '..'

const ContactContainer = () =>
    <Page>
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
