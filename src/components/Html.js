
import React from 'react'
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
        <script dangerouslySetInnerHTML={{ __html: `
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
          analytics.load("${process.env.SEGMENT_KEY}");}}();
        `}} />
        <div id='content' dangerouslySetInnerHTML={{ __html: content }} />
        <script charSet='UTF-8' src={`/${assets.main}`} />
      </body>
    </html>
  )
}
