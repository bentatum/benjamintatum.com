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
import Demo from './Demo'
import Helmet from 'react-helmet'

const BetterReactSpinKitContainer = (props, { rebass: { colors } }) =>
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
      <Section>
        <Demo
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
      </Section>
      <Section>
        <Demo
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
      </Section>
      <Section>
        <Demo
          code={`
<CubeGrid
  cols={4}
  rows={4}
/>
          `}
          component={<CubeGrid cols={4} rows={4}/>}
          name='Cube Grid'
        />
      </Section>
      <Section>
        <Demo
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
      </Section>
      <Section>
        <Demo
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
      </Section>
      <Section>
        <Demo
          code='<RotatingPlane/>'
          component={<RotatingPlane/>}
          name='Rotating Plane'
        />
      </Section>
      <Section>
        <Demo
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
      </Section>
      <Section>
        <Demo
          code={`
<WanderingCubes/>
          `}
          component={
            <WanderingCubes/>
          }
          name='WanderingCubes'
        />
      </Section>
      <Section>
        <Demo
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
      </Section>
      <Section>
        <Demo
          code={`
<Wordpress
  innerColor='tomato'
/>
          `}
          component={<Wordpress innerColor='tomato'/>}
          name='Wordpress'
        />
      </Section>
    </Page.Content>
  </Page>

BetterReactSpinKitContainer.contextTypes = {
  rebass: PropTypes.object.isRequired
}

export default BetterReactSpinKitContainer
