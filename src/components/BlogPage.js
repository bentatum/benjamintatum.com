
import { colors } from 'theme'
import React from 'react'
import marked from 'marked'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import asyncConnect from 'components/asyncConnect'
import { getPosts, GET_POSTS } from 'redux/modules/blog'
import { BackButton, page, PrimaryNav, MenuButton } from 'components'
import { Container, Heading } from 'rebass'
import { Link } from 'react-router'
import moment from 'moment'

const enhance = compose(
  connect(({ blog: { posts } }) => ({ posts })),
  asyncConnect(props => [{
    key: GET_POSTS,
    action: getPosts
  }]),
  page(props => ({
    ...props,
    navbar: {
      nav: <PrimaryNav />,
      leftComponent: <BackButton />,
      centerComponent: (
        <Heading level={1}>
          <Link to='/blog' style={{ color: colors.black }}>
            Blog
          </Link>
        </Heading>
      ),
      rightComponent: <MenuButton />
    }
  }))
)

export default enhance(props =>
  <Container>
    {props.posts.map((post, key) => {
      const date = moment(new Date(post.created * 1000)).format('MM/YY/DD')
      return (
        <div key={key}>
          <div>
            <div>{date}</div>
            <Heading level={2}>
              {post.title}
            </Heading>
          </div>
          <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
        </div>
      )
    })}
  </Container>
)
