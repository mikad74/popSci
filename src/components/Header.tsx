import React from 'react'
import { ReactComponent as Logo } from "/public/wimamitudbe2.svg"

function Header({setPage}) {
  return (
    <div className="header button" onClick={() => setPage(0)}>
      wimamitudbe
    </div>
  )
}

export default Header
