
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Link } from 'react-router'
import { Button } from 'rebass'
import style from 'components/theme/style'
import canUseDOM from 'can-use-dom'

const items = [
  {
    to: '/work',
    children: 'Work'
  },
  {
    to: '/blog',
    children: 'Blog'
  },
  {
    to: '/contact',
    children: 'Contact'
  },
  {
    href: 'https://github.com/bentatum',
    children: 'Github'
  },
  {
    href: 'https://www.linkedin.com/in/benjamintatum',
    children: 'LinkedIn'
  },
  {
    href: '//media.benjamintatum.com/ben-tatum-resume.pdf',
    children: 'CV'
  }
]

export default class PrimaryNav extends React.Component {
  buttons = []

  componentDidMount () {
    const { TimelineLite } = require('gsap')
    const tl = new TimelineLite()

    tl.staggerFrom(this.buttons, 0.2, {
      x: 9999
    }, 0.1)
  }

  render () {
    return (
      <Flex
        ref={ref => (this.el = ref)}
        flexColumn
        align='center'
        style={{ visibility: canUseDOM ? 'visible' : 'hidden' }}
        {...this.props}>
        {items.map((i, key) => {
          const item = (
            <Button style={{ width: 150 }}>
              {i.children}
            </Button>
          )
          return (
            <div
              key={key}
              ref={ref => this.buttons.push(ref)}>
              <Box p={1} className={style.buttonFx}>
                <Choose>
                  <When condition={i.to}>
                    <Link to={i.to}>
                      {item}
                    </Link>
                  </When>
                  <When condition={i.href}>
                    <a href={i.href} target='_blank'>
                      {item}
                    </a>
                  </When>
                  <Otherwise>
                    {item}
                  </Otherwise>
                </Choose>
              </Box>
            </div>
          )
        })}
      </Flex>
    )
  }
}
