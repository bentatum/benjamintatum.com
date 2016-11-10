
import { find } from 'lodash'
import { default as React } from 'react'
import { ExhibitCard, data } from 'Work'
import { Page } from 'components/page'
import { PrimaryNav } from 'components'

export default ({ children, params: { slug } }) =>
  <Page navbar={{ nav: <PrimaryNav /> }}>
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
