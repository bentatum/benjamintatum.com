import React from 'react'
import PortfolioPiece from './PortfolioPiece'

const pieceProps = {
    mb: 3
}

const Portfolio = () =>
    <div>
        <PortfolioPiece
            {...pieceProps}
            address="//costimize.com"
            name="Costimize.com"
            screenShot="http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/costimize.com-screenshot.png"
        />
        <PortfolioPiece
            {...pieceProps}
            address="//goskipstone.com"
            name="GoSkipstone.com"
            screenShot="http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/goskipstone.com-screenshot.png"
        />
        <PortfolioPiece
            {...pieceProps}
            address="//asklearnvote.com"
            name="AskLearnVote.com"
            screenShot="http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/asklearnvote.com-screenshot.png"
        />
    </div>

export default Portfolio
