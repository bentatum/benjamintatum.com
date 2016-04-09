import React from 'react'
import { NavItem, Section, Space, Toolbar } from 'rebass'
import { Page } from '..'
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

const BetterReactSpinKitContainer = () =>
    <Page>
        <Toolbar>
            <NavItem is="div">
                <IndexLink to="/">
                    Benjamin Tatum
                </IndexLink>
            </NavItem>
            <Space auto/>
            <NavItem
                href="http://github.com/bentatum/better-react-spinkit"
                is="a"
                target="_blank"
            >
                Github
            </NavItem>
        </Toolbar>
        <Page.Title>
            Better React SpinKit
        </Page.Title>
        <Section>
            <Demo
                code={`
<ChasingDots
    scaleEnd={0.6}
    scaleStart={0.2}
    size={50}
/>
                `}
                component={
                    <ChasingDots
                        scaleEnd={0.6}
                        scaleStart={0.2}
                        size={50}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={`
<Circle
    scaleEnd={0.5}
    scaleStart={0.1}
    size={50}
/>
                `}
                component={
                    <Circle
                        scaleEnd={0.5}
                        scaleStart={0.1}
                        size={50}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={`
<CubeGrid
    cols={4}
    rows={4}
    size={50}
/>
                `}
                component={
                    <CubeGrid
                        cols={4}
                        rows={4}
                        size={50}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={`
<DoubleBounce
    scaleEnd={1}
    scaleStart={0.2}
    size={50}
/>
                `}
                component={
                    <DoubleBounce
                        scaleEnd={1}
                        scaleStart={0.2}
                        size={50}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={`
<Pulse
    scaleEnd={1}
    scaleStart={0}
    size={50}
/>
                `}
                component={
                    <Pulse
                        scaleEnd={1}
                        scaleStart={0}
                        size={50}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={'<RotatingPlane size={20}/>'}
                component={<RotatingPlane size={20}/>}
            />
        </Section>
        <Section>
            <Demo
                code={`
<ThreeBounce
    scaleEnd={0.75}
    scaleStart={0.2}
    size={20}
/>
                `}
                component={
                    <ThreeBounce
                        scaleEnd={0.75}
                        scaleStart={0.2}
                        size={20}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={'<WanderingCubes size={50}/>'}
                component={<WanderingCubes size={50}/>}
            />
        </Section>
        <Section>
            <Demo
                code={`
<Wave
    count={10}
    scaleYEnd={0.2}
    size={50}
/>
                `}
                component={
                    <Wave
                        count={10}
                        scaleYEnd={0.2}
                        size={50}
                    />
                }
            />
        </Section>
        <Section>
            <Demo
                code={'<Wordpress size={30}/>'}
                component={<Wordpress size={30}/>}
            />
        </Section>
    </Page>

export default BetterReactSpinKitContainer
