import React from 'react'
import {useHistory} from 'react-router-dom'

function JobCard({job}) {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/job/${job.id}`)
  }

  return (
    <div className='job-card' onClick={handleClick}>
      <h3>{job.title}</h3>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <button>Bookmark</button>
    </div>
  )
}

export default JobCard
