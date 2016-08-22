
import { find } from 'lodash'
import { default as React } from 'react'
import { ExhibitCard, data } from 'Work'

const Work = ({ children, params: { project } }) =>
  <div>
    <Choose>
      <When condition={!project}>
        <ExhibitCard
          rounded='top'
          {...find(data, { name: 'Costimize' })}
        />
        <ExhibitCard
          rounded='bottom'
          {...find(data, { name: 'Skipstone' })}
        />
      </When>
      <Otherwise>
        {children}
      </Otherwise>
    </Choose>
  </div>

export default Work
