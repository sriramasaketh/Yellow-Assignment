import React from 'react'

function Navigation({setActiveSection}) {
  return (
    <nav className='navigation'>
      <button onClick={() => setActiveSection('jobs')}>Jobs</button>
      <button onClick={() => setActiveSection('bookmarks')}>Bookmarks</button>
    </nav>
  )
}

export default Navigation
