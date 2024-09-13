import React, {useState, useEffect, useCallback} from 'react'
import JobCard from './JobCard'

const API_URL = 'https://api.example.com/jobs'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const fetchJobs = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}?page=${page}`)
      const data = await response.json()
      setJobs(prevJobs => [...prevJobs, ...data.jobs])
      setPage(prevPage => prevPage + 1)
    } catch (err) {
      setError('Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }, [page])

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchJobs()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [fetchJobs])

  return (
    <div className='jobs'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {jobs.length === 0 && !loading && <p>No jobs available.</p>}
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default Jobs
