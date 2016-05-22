import { default as React, PropTypes } from 'react'
import { Page } from 'components'
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
  Wordpress
} from 'better-react-spinkit'
import { default as Demo } from './Demo'
import { default as Helmet } from 'react-helmet'
import { Flex } from 'reflexbox'

const BetterReactSpinKitContainer = (props, { colors, shadows }) => {
  const sharedDemoProps = {
    m: 2,
    p: 2,
    rounded: true,
    style: {
      boxShadow: shadows.black,
      width: 300
    }
  }
  return (
    <Page>
      <Helmet
        meta={[
          {
            name: 'description',
            content: 'A better collection of loading indicators animated with CSS for React'
          }
        ]}
        title='Better React Spinkit'
      />
      <Page.Title>
        Better React Spinkit
      </Page.Title>
      <Page.Content>
        <Flex justify='center' wrap>
          <Demo
            {...sharedDemoProps}
            component={<ChasingDots/>}
            name='Chasing Dots'
          />
          <Demo
            {...sharedDemoProps}
            component={
              <Circle
                scaleEnd={0.5}
                scaleStart={0.1}
              />
            }
            name='Circle'
          />
          <Demo
            {...sharedDemoProps}
            component={<CubeGrid/>}
            name='Cube Grid'
          />
          <Demo
            {...sharedDemoProps}
            component={<DoubleBounce/>}
            name='Double Bounce'
          />
          <Demo
            {...sharedDemoProps}
            component={
              <Pulse
                scaleEnd={1}
                scaleStart={0}
              />
            }
            name='Pulse'
          />
          <Demo
            {...sharedDemoProps}
            component={<RotatingPlane/>}
            name='Rotating Plane'
          />
          <Demo
            {...sharedDemoProps}
            component={<ThreeBounce/>}
            name='ThreeBounce'
          />
          <Demo
            {...sharedDemoProps}
            component={<WanderingCubes/>}
            name='WanderingCubes'
          />
          <Demo
            {...sharedDemoProps}
            component={<Wave/>}
            name='Wave'
          />
          <Demo
            {...sharedDemoProps}
            component={<Wordpress/>}
            name='Wordpress'
          />
        </Flex>
      </Page.Content>
    </Page>
  )
}

BetterReactSpinKitContainer.contextTypes = {
  colors: PropTypes.object.isRequired,
  shadows: PropTypes.object.isRequired
}

export default BetterReactSpinKitContainer
