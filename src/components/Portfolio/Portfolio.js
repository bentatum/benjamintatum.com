import React from 'react'
import PortfolioPiece from './PortfolioPiece'

const pieceProps = {
  mb: 3
}

const Portfolio = () =>
  <div>
    <PortfolioPiece
      {...pieceProps}
      linkProps={{
        href: '//costimize.com',
        target: '_blank'
      }}
      name='Costimize.com'
      screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/costimize.com-screenshot.png'
    />
    <PortfolioPiece
      {...pieceProps}
      linkProps={{
        href: 'https://skip.st/one/d37776c75fe8971103bfca44ce63a7ab',
        target: '_blank'
      }}
      name='Skipstone Interactive Video Player'
      screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/skipstone-player-screenshot.png'
    />
    <PortfolioPiece
      {...pieceProps}
      linkProps={{
        href: '//goskipstone.com',
        target: '_blank'
      }}
      name='GoSkipstone.com'
      screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/goskipstone.com-screenshot.png'
    />
    <PortfolioPiece
      {...pieceProps}
      linkProps={{
        href: '//asklearnvote.com',
        target: '_blank'
      }}
      name='AskLearnVote.com'
      screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/asklearnvote.com-screenshot.png'
    />
    <PortfolioPiece
      {...pieceProps}
      linkProps={{
        href: '/better-react-spinkit'
      }}
      name='Better React SpinKit'
      screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/better-react-spinkit-demo-screenshot.png'
    />
    <PortfolioPiece
      {...pieceProps}
      linkProps={{
        href: '/redux-simplestorage'
      }}
      name='Redux Simple Storage'
      screenShot='http://homepage-static-assets.s3-website-us-east-1.amazonaws.com/redux-simplestorage-screenshot.png'
    />
  </div>

export default Portfolio
