import React from 'react'
import { NavItem, Section, SectionHeader, Space, Toolbar } from 'rebass'
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
import { IndexLink } from 'react-router'
import Demo from './Demo'
import Helmet from 'react-helmet'

const BetterReactSpinKitContainer = () =>
  <Page>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'A better collection of loading indicators animated with CSS for React'
        }
      ]}
      title='Better React SpinKit'
    />
    <Toolbar>
      <NavItem is='div'>
        <IndexLink to='/'>
          Benjamin Tatum
        </IndexLink>
      </NavItem>
      <Space auto/>
      <NavItem
        href='http://github.com/bentatum/better-react-spinkit'
        is='a'
        target='_blank'
      >
          Github
      </NavItem>
    </Toolbar>
    <Page.Title>
      Better React SpinKit
    </Page.Title>
    <Page.Content>
      <Section>
        <SectionHeader heading='ChasingDots'/>
        <Demo
          code={`
<ChasingDots
  color='#333'
  scaleEnd={0.6}
  scaleStart={0.2}
  size={50}
/>
          `}
          component={
            <ChasingDots
              color='#333'
              scaleEnd={0.6}
              scaleStart={0.2}
              size={50}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='Circle'/>
        <Demo
          code={`
<Circle
  color='#333'
  scaleEnd={0.5}
  scaleStart={0.1}
  size={30}
/>
          `}
          component={
            <Circle
              color='#333'
              scaleEnd={0.5}
              scaleStart={0.1}
              size={30}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='CubeGrid'/>
        <Demo
          code={`
<CubeGrid
  color='#333'
  cols={4}
  rows={4}
  size={50}
/>
          `}
          component={
            <CubeGrid
              color='#333'
              cols={4}
              rows={4}
              size={50}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='DoubleBounce'/>
        <Demo
          code={`
<DoubleBounce
  color='#333'
  scaleEnd={1}
  scaleStart={0.2}
  size={50}
/>
          `}
          component={
            <DoubleBounce
              color='#333'
              scaleEnd={1}
              scaleStart={0.2}
              size={50}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='Pulse'/>
        <Demo
          code={`
<Pulse
  color='#333'
  scaleEnd={1}
  scaleStart={0}
  size={50}
/>
          `}
          component={
            <Pulse
              color='#333'
              scaleEnd={1}
              scaleStart={0}
              size={50}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='RotatingPlane'/>
        <Demo
          code={`
<RotatingPlane
  color='#333'
  size={20}
/>
          `}
          component={
            <RotatingPlane
              color='#333'
              size={20}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='ThreeBounce'/>
        <Demo
          code={`
<ThreeBounce
  color='#333'
  scaleEnd={0.75}
  scaleStart={0.2}
  size={20}
/>
          `}
          component={
            <ThreeBounce
              color='#333'
              scaleEnd={0.75}
              scaleStart={0.2}
              size={20}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='WanderingCubes'/>
        <Demo
          code={`
<WanderingCubes
  color='#333'
  size={50}
/>
          `}
          component={
            <WanderingCubes
              color='#333'
              size={50}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='Wave'/>
        <Demo
          code={`
<Wave
  color='#333'
  count={10}
  scaleYEnd={0.2}
  size={50}
/>
          `}
          component={
            <Wave
              color='#333'
              count={10}
              scaleYEnd={0.2}
              size={50}
            />
          }
        />
      </Section>
      <Section>
        <SectionHeader heading='Wordpress'/>
        <Demo
          code={`
<Wordpress
  color='#333'
  innerColor='tomato'
  size={30}
/>
          `}
          component={
            <Wordpress
              color='#333'
              innerColor='tomato'
              size={30}
            />
          }
        />
      </Section>
    </Page.Content>
  </Page>

export default BetterReactSpinKitContainer
