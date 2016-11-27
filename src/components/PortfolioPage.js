
import { colors } from 'theme'
import { values } from 'lodash'
import { Heading } from 'rebass'
import { Link } from 'react-router'
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
    <Choose>
      <When condition={!props.params.slug}>
        {values(exhibits).map(({ Card }, key) => cloneElement(Card, { key }))}
      </When>
      <Otherwise>
        {props.children}
      </Otherwise>
    </Choose>
  </div>
)
