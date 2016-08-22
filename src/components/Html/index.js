
import { default as React, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import { default as Helmet } from 'react-helmet'
import { default as Segment } from './Segment'

const Html = ({ assets, component }) => {
  const content = component ? renderToString(component) : ''
  const head = Helmet.rewind()
  return (
    <html lang='en-us'>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
      </head>
      <body>
        <Segment />
        <div id='content' dangerouslySetInnerHTML={{ __html: content }} />
        <script charSet='UTF-8' src={`/${assets.main}`} />
      </body>
    </html>
  )
}

Html.propTypes = {
  assets: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired
}

export default Html
