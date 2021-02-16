import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{ 
      overflowY: 'scroll',
      border: '3px solid black', 
      height: '700px',
      margin: '2rem 0',
      padding: '2rem 0' 
    }}>
      { props.children }
    </div>
  )
}

export default Scroll