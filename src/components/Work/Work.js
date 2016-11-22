
import { find } from 'lodash'
import React from 'react'
import { ExhibitCard, data } from 'Work'
import { Page } from 'components/page'
import { BackButton, PrimaryNav, MenuButton } from 'components'
import { Heading } from 'rebass'

export default props =>
  <Page
    navbar={{
      nav: <PrimaryNav />,
      leftComponent: <BackButton />,
      centerComponent: <Heading>Work</Heading>,
      rightComponent: <MenuButton />
    }}>
    <Choose>
      <When condition={!props.params.slug}>
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
        {props.children}
      </Otherwise>
    </Choose>
  </Page>
