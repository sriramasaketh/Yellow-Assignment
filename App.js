import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Jobs from './components/Jobs'
import Bookmarks from './components/Bookmarks'
import JobDetail from './pages/JobDetail'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('jobs')

  return (
    <div className='app'>
      <Switch>
        <Route path='/job/:id' component={JobDetail} />
        <Route path='/'>
          <div className='main-content'>
            {activeSection === 'jobs' ? <Jobs /> : <Bookmarks />}
            <Navigation setActiveSection={setActiveSection} />
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
