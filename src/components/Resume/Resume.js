import React from 'react'
import { Page, PrimaryNav, Navbar } from 'components'
import { default as OrgCard } from './OrgCard'
import { Divider, Section, Heading } from 'rebass'

const Resume = () =>
  <Page>
    <Navbar nav={<PrimaryNav/>}/>
    <Page.Title>
      Experience
    </Page.Title>
    <Page.Content>
      <Heading>
        Experience
      </Heading>
      <OrgCard
        duration='6/14 - now'
        organization='Costimize'
        technologies={[
          'Javascript',
          'Coffeescript',
          'ReactJS',
          'Redux',
          'Express',
          'Amazon Web Services'
        ]}
        title='Technical Lead & Managing Partner'
      />
      <Divider/>
      <OrgCard
        duration='2/14 - 2/15'
        organization='Ithaka (Jstor.org)'
        technologies={[
          'Python',
          'Javascript',
          'Amazon Web Services'
        ]}
        title='Senior Front-end Developer'
      />
      <Divider/>
      <OrgCard
        duration='2/12 - 2/14'
        mb={4}
        organization='Team Detroit'
        technologies={[
          'PHP',
          'Javascript',
          'HTML',
          'CSS'
        ]}
        title='Developer'
      />
    </Page.Content>
  </Page>

export default Resume
