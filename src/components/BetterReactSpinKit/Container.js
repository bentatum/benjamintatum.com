import { default as React, PropTypes } from 'react'
import { Section } from 'rebass'
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
            code={`
<ChasingDots
  scaleEnd={0.6}
  scaleStart={0.2}
/>
            `}
            component={
              <ChasingDots
                scaleEnd={0.6}
                scaleStart={0.2}
              />
            }
            name='Chasing Dots'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<Circle
  scaleEnd={0.5}
  scaleStart={0.1}
/>
            `}
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
            code={`
<CubeGrid
  cols={4}
  rows={4}
/>
            `}
            component={<CubeGrid cols={4} rows={4}/>}
            name='Cube Grid'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<DoubleBounce
  scaleEnd={1}
  scaleStart={0.2}
/>
            `}
            component={
              <DoubleBounce
                scaleEnd={1}
                scaleStart={0.2}
              />
            }
            name='Double Bounce'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<Pulse
  scaleEnd={1}
  scaleStart={0}
/>
            `}
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
            code='<RotatingPlane/>'
            component={<RotatingPlane/>}
            name='Rotating Plane'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<ThreeBounce
  scaleEnd={0.75}
  scaleStart={0.2}
/>
            `}
            component={
              <ThreeBounce
                scaleEnd={0.75}
                scaleStart={0.2}
              />
            }
            name='ThreeBounce'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<WanderingCubes/>
            `}
            component={
              <WanderingCubes/>
            }
            name='WanderingCubes'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<Wave
  count={10}
  scaleYEnd={0.2}
/>
            `}
            component={
              <Wave
                count={10}
                scaleYEnd={0.2}
              />
            }
            name='Wave'
          />
          <Demo
            {...sharedDemoProps}
            code={`
<Wordpress
  innerColor='tomato'
/>
            `}
            component={<Wordpress innerColor='tomato'/>}
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
