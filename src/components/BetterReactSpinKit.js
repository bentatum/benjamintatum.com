import React from 'react'
import { Section, Pre } from 'rebass'
import { Page } from '.'
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

const BetterReactSpinKit = () =>
    <Page>
        <Page.Title>
            Better React SpinKit
        </Page.Title>
        <Section>
            <ChasingDots/>
            <Pre>
                {"<ChasingDots/>"}
            </Pre>
        </Section>
        <Section>
            <Circle/>
            <Pre>
                {"<Circle/>"}
            </Pre>
        </Section>
        <Section>
            <CubeGrid/>
            <Pre>
                {"<CubeGrid/>"}
            </Pre>
        </Section>
        <Section>
            <DoubleBounce/>
            <Pre>
                {"<DoubleBounce/>"}
            </Pre>
        </Section>
        <Section>
            <Pulse/>
            <Pre>
                {"<Pulse/>"}
            </Pre>
        </Section>
        <Section>
            <RotatingPlane/>
            <Pre>
                {"<RotatingPlane/>"}
            </Pre>
        </Section>
        <Section>
            <ThreeBounce/>
            <Pre>
                {"<ThreeBounce/>"}
            </Pre>
        </Section>
        <Section>
            <WanderingCubes/>
            <Pre>
                {"<WanderingCubes/>"}
            </Pre>
        </Section>
        <Section>
            <Wave/>
            <Pre>
                {"<Wave/>"}
            </Pre>
        </Section>
        <Section>
            <Wordpress/>
            <Pre>
                {"<Wordpress/>"}
            </Pre>
        </Section>
    </Page>

export default BetterReactSpinKit
