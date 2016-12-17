
import React from 'react'
import { Navbar } from 'components'

export default propsMapper => BaseComponent => props => {
  const _props = propsMapper(props)
  return (
    <div>
      <If condition={_props.navbar}>
        <Navbar {..._props.navbar} />
      </If>
      <BaseComponent {..._props} {...props} />
    </div>
  )
}
