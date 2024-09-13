import React, {useState, useEffect} from 'react'

function Bookmarks() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([])

  useEffect(() => {
    const storedBookmarks =
      JSON.parse(localStorage.getItem('bookmarkedJobs')) || []
    setBookmarkedJobs(storedBookmarks)
  }, [])

  return (
    <div className='bookmarks'>
      {bookmarkedJobs.length === 0 && <p>No jobs bookmarked yet.</p>}
      {bookmarkedJobs.map(job => (
        <div key={job.id} className='job-card'>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
          <p>{job.salary}</p>
        </div>
      ))}
    </div>
  )
}

export default Bookmarks
