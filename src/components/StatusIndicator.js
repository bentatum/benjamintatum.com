
import { Space, Text } from 'rebass'
import { Reflex, Flex } from 'reflexbox'
import { Loading, Success, Failure } from 'Icons'
import { default as React, PropTypes, createElement } from 'react'

const StatusIndicator = ({
  status,
  messages,
  statuses: [REQUEST, SUCCESS, FAILURE],
  indicators,
  indicatorProps,
  ...props
}) => {
  if (!status) {
    return null
  }

  indicators = indicators || {
    [REQUEST]: Loading,
    [SUCCESS]: Success,
    [FAILURE]: Failure
  }

  const indicator = createElement(indicators[status], indicatorProps[status])
  const message = messages[status]

  return (
    <div {...props}>
      <Choose>
        <When condition={message}>
          <Flex align='center' justify='center'>
            {indicator}
            <Space />
            <Text children={message} />
          </Flex>
        </When>
        <Otherwise>
          {indicator}
        </Otherwise>
      </Choose>
    </div>
  )
}

StatusIndicator.propTypes = {
  indicators: PropTypes.object,
  indicatorProps: PropTypes.object,
  status: PropTypes.string,
  messages: PropTypes.object,
  statuses: PropTypes.array
}

StatusIndicator.defaultProps = {
  indicatorProps: {
    pending: {},
    success: {},
    failure: {}
  },
  messages: {},
  statuses: [
    'pending',
    'success',
    'failure'
  ]
}

export default Reflex(StatusIndicator)
