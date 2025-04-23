import React from 'react'
import NavBar from './NavBar'

const Main = (props) => {
  return (
    <div>
        <NavBar/>
      {props.child}
    </div>
  )
}

export default Main
