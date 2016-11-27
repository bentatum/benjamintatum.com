
import React from 'react'
import Segment from './Segment'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'

export default ({ assets, component }) => {
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
