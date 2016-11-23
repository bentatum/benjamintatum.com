
import { find } from 'lodash'
import React from 'react'
import { ExhibitCard, data } from 'Work'
import { Page } from 'components/page'
import { BackButton, PrimaryNav, MenuButton } from 'components'
import { Heading } from 'rebass'
import { Link } from 'react-router'
import getContext from 'recompose/getContext'

const enhance = getContext({
  colors: React.PropTypes.object
})

export default enhance(props =>
  <Page
    navbar={{
      nav: <PrimaryNav />,
      leftComponent: <BackButton />,
      centerComponent: (
        <Heading>
          <Link to='/work' style={{ color: props.colors.black }}>
            Work
          </Link>
        </Heading>
      ),
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
)
