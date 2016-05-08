import React from 'react'
import { Page } from 'components'
import { default as OrgCard } from './OrgCard'

const Resume = () =>
  <Page>
    <Page.Title>
      Experience
    </Page.Title>
    <Page.Content>
      <OrgCard
        duration='2/15 - now'
        organization='Skipstone'
        technologies={[
          'Isomorphic Javascript',
          'ReactJS',
          'Redux',
          'Amazon Web Services'
        ]}
        title='Senior Manager of Development Operations'
      />
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
