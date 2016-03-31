import React, {Component, PropTypes} from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'

export default class Html extends Component {

    static propTypes = {
        assets: PropTypes.object,
        component: PropTypes.node,
        store: PropTypes.object
    };

    render() {
        const { assets, component, store } = this.props
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

                    <link
                        href="/favicon.png"
                        rel="shortcut icon"
                    />
                    <meta
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
                        name="viewport"
                    />

                </head>
                <body>
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                        id="content"
                    />
                    <script
                        charSet="UTF-8"
                        src={assets.main}
                    />
                </body>
            </html>
        )
    }
}
