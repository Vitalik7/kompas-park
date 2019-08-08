import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './App.css'

const images = {
  logo: require('../assets/images/build1.jpg'),
  build2: require('../assets/images/build2.jpg'),
  floor: require('../assets/images/floor.jpg'),
  foot: require('../assets/images/foot.jpg'),
  vol: require('../assets/images/vol.jpg'),
  lotka: require('../assets/images/lotka.jpg'),
  // twitter: require('../../../assets/images/twIcon.png')
}

const App = () => {
  const videos = ['https://youtu.be/lzd1ejCVAPQ', 'https://youtu.be/6zzfSINrRF4', 'https://youtu.be/W3U9Fg5tndA', 'https://youtu.be/ST3Hygf3G44']
  const [states, setStates] = useState({
    first: false,
    second: false,
    third: false,
    four: false
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
              <div className='contentBlock'>
                <p>Building Improvement</p>
                <button onClick={() => updadeButtons('third', !states.third)}>{states.third ? 'hide' : 'show'}</button>
                {states.third ? 
                <div>
                  <div className='rowDiv'>
                    <div className='block'>
                      <img className='foto' src={images.logo} />
                      <p className='rowText'>Awning at the kitchen area</p>
                    </div>
                    
                    <div className='block'>
                      <img className='foto' src={images.build2} />
                      <p className='rowText'>Awning at the cottage house</p>
                    </div>
                  </div>
                  <img className='foto' src={images.floor} />
                  <p>Floor replacement</p>
                </div>

                : null

                }
              </div>
              
              <div className='contentBlock'>
                <p>Sport Activities</p>
                <button onClick={() => updadeButtons('four', !states.four)}>{states.four ? 'hide' : 'show'}</button>
                {
                  states.four ?
                  <div>
                    <img className='foto' src={images.foot} />
                    <img className='foto' src={images.vol} />
                    <img className='foto' src={images.lotka} />
                  </div>
                  : null

                }
              </div>
                
              
              <p>Landscaping</p>
              </div>
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
