import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './App.css'

const App = () => {
  const videos = ['https://youtu.be/lzd1ejCVAPQ', 'https://youtu.be/6zzfSINrRF4', 'https://youtu.be/W3U9Fg5tndA', 'https://youtu.be/ST3Hygf3G44']
  const [states, setStates] = useState({
    first: false,
    second: false
  })

  const updadeButtons = (name, value) => {
    setStates({
      ...states,
      [name]: value
    })
  }

  return (
    <div className='App'>
      <h1>Kompas Park</h1>

      <div className='container'>
        <div className='left'>
          <h3>Kompas Park Activities</h3>
          <button onClick={() => updadeButtons('first', !states.first)}>{states.first ? 'hide' : 'show'}</button>
          {
            states.first && 
            <div className='row'>

              {videos && videos.map((item, index) => {
                return (
                  <div key={index}>
                    <ReactPlayer
                      width='100%'
                      controls
                      style={{ marginTop: '10px' }}
                      url={item}
                    />
                  </div>
                )
              })}
              
            </div>
          }
        </div>
    
        <div className='right'>
          <h3>Development</h3>
          <button onClick={() => updadeButtons('second', !states.second)}>{states.second ? 'hide' : 'show'}</button>
          {
            states.second && 
            <div>
              <p>Building Improvement</p>
              <p>Sport Activities</p>
              <p>Landscaping</p>
              </div>
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
