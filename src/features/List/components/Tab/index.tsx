import React from 'react'
import "./Tab.css"

interface TabProps {
  name: string;
  title: string;
  handleWhatsFetching: (whatsFetching: any) => void;
  whatsFetching: string;
}

function Tab(props: TabProps) {
  return (
    <div onClick={() => props.handleWhatsFetching(props.name)}>
        <button style={{ backgroundColor: props.whatsFetching === props.name ? "black" : "aquamarine" }} className='tab-button'>{props.title}</button>
    </div>
  )
}

export default Tab