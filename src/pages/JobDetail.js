import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const API_URL = 'https://api.example.com/job/'

function JobDetail() {
  const {id} = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${API_URL}${id}`)
        const data = await response.json()
        setJob(data.job)
      } catch (err) {
        setError('Failed to fetch job details')
      } finally {
        setLoading(false)
      }
    }

    fetchJob()
  }, [id])

  return (
    <div className='job-detail'>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {job && (
        <>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p>{job.requirements}</p>
        </>
      )}
    </div>
  )
}

export default JobDetail
