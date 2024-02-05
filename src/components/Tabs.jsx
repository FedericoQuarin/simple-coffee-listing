import React from 'react'
import { TABS } from '../const'
import PropTypes from 'prop-types'

export function Tabs ({ selectedTab, setSelectedTab }) {
  return (
    <div className='tabs'>
      <button
        className={`tabs-tab${selectedTab === TABS.ALL ? ' selected' : ''}`}
        onClick={() => setSelectedTab(TABS.ALL)}
      >
        {TABS.ALL}
      </button>
      <button
        className={`tabs-tab${selectedTab === TABS.AVAILABLE ? ' selected' : ''}`}
        onClick={() => setSelectedTab(TABS.AVAILABLE)}
      >
        {TABS.AVAILABLE}
      </button>
    </div>
  )
}

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func
}
