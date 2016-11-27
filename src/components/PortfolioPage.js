
import { colors } from 'theme'
import { values } from 'lodash'
import { Heading } from 'rebass'
import { Link, Match } from 'react-router'
import React, { cloneElement} from 'react'
import * as exhibits from 'portfolio/exhibits'
import { page, BackButton, PrimaryNav, MenuButton } from 'components'

const enhance = page(props => ({
  ...props,
  navbar: {
    nav: <PrimaryNav />,
    leftComponent: <BackButton />,
    centerComponent: (
      <Heading level={1}>
        <Link to='/work' style={{ color: colors.black }}>
          Work
        </Link>
      </Heading>
    ),
    rightComponent: <MenuButton />
  }
}))

export default enhance(props =>
  <div>
    <Match exactly pattern='/work' render={() =>
      <div>
        {values(exhibits).map(({ Card }, key) => cloneElement(Card, { key }))}
      </div>
    } />
    {values(exhibits).map(({ url, Page }, key) =>
      <Match
        key={key}
        pattern={url}
        component={Page} />
    )}
  </div>
)
