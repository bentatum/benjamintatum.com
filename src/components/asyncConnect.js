
import React from 'react'
import { forOwn } from 'lodash'
import { connect } from 'react-redux'

export default depsMapper => Component => props => {
  const actions = {}
  const statusMap = {}
  const deps = depsMapper(props)
  deps.forEach(prop => {
    actions[prop.key] = prop.action
    statusMap[prop.key] = null
  })

  @connect(
    ({
      await: { statuses }
    }) => {
      const statusList = []
      forOwn(statusMap, (val, key) => {
        const status = statuses[key]
        statusList.push(status)
        statusMap[key] = status
      })
      return {
        statusMap,
        statusList
      }
    },
    { ...actions }
  )

  class AsyncConnect extends React.Component {
    componentDidMount () {
      deps.forEach(({ key, data, params, headers }) => {
        const status = this.props.statusMap[key]
        if (!status) {
          this.props[key](data || params, headers)
        }
      })
    }

    render () {
      const { statusList, ..._props } = this.props
      if (statusList.indexOf('pending') > -1 ||
        statusList.indexOf(undefined) > -1) {
        // return <Loading />
        return null
      }
      return <Component {..._props} {...props} />
    }
  }

  return <AsyncConnect />
}
