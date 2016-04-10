import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'

const Html = ({ assets, component }) => {
    const content = component ? renderToString(component) : ''
    const head = Helmet.rewind()
    return (
        <html lang="en-us">
            <head>
                {head.base.toComponent()}
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {head.link.toComponent()}
                {head.script.toComponent()}
            </head>
            <body>
                { /* Google Tag manager */ }
                <script
                    dangerouslySetInnerHTML={{ __html:
                    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TVPM93');`
                    }}
                />
                { /* Google Analytics */ }
                <script
                    dangerouslySetInnerHTML={{ __html:
                    `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-76151192-1', 'auto');
                    ga('send', 'pageview');`
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    id="content"
                />
                <script
                    charSet="UTF-8"
                    src={`/${assets.main}`}
                />
            </body>
        </html>
    )
}

Html.propTypes = {
    assets: PropTypes.object.isRequired,
    component: PropTypes.node.isRequired
}

export default Html
