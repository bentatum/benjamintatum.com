
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Link } from 'react-router'
import { Button } from 'rebass'

const items = [
  {
    to: '/work',
    children: 'Work'
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
    children: 'Resumé'
  }
]

export default props =>
  <Flex
    flexColumn
    align='center'
    {...props}>
    {items.map((i, key) => {
      const item = (
        <Button style={{ width: 150 }}>
          {i.children}
        </Button>
      )
      return (
        <Box p={1} key={key}>
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
      )
    })}
  </Flex>
