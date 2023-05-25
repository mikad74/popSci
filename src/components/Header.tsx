import React from 'react'

function Header({setPage}) {
  return (
    <div className="header button" onClick={() => setPage(0)}>
      wimamitudbe
    </div>
  )
}

export default Header
