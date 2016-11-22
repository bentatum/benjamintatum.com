
import { find } from 'lodash'
import React from 'react'
import { ExhibitCard, data } from 'Work'
import { Page } from 'components/page'
import { BackButton, PrimaryNav } from 'components'
import { Heading } from 'rebass'

export default ({ children, params: { slug } }) =>
  <Page
    navbar={{
      nav: <PrimaryNav />,
      leftComponent: <BackButton />,
      centerComponent: <Heading>Work</Heading>
    }}>
    <Choose>
      <When condition={!slug}>
        <ExhibitCard
          rounded='top'
          {...find(data, { name: 'Costimize' })}
        />
        <ExhibitCard
          rounded='bottom'
          {...find(data, { name: 'Skipstone' })}
        />
      </When>
      <Otherwise>
        {children}
      </Otherwise>
    </Choose>
  </Page>
