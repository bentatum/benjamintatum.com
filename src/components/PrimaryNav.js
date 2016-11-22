
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Link } from 'react-router'
import { Button } from 'rebass'

const items = [
  {
    url: '/work',
    children: 'work'
  },
  {
    url: '/contact',
    children: 'contact'
  }
]

export default props =>
  <Flex
    flexColumn
    align='center'
    {...props}>
    {items.map((i, key) =>
      <Box p={1} key={key}>
        <Link to={i.url}>
          <Button style={{ width: 150 }}>
            {i.children}
          </Button>
        </Link>
      </Box>
    )}
  </Flex>
