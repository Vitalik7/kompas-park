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
  laundry1: require('../assets/images/Laundry1.jpg'),
  laundry2: require('../assets/images/Laundry2.jpg'),
  laundry3: require('../assets/images/Laundry3.jpg'),
  laundry4: require('../assets/images/Laundry4.jpg'),
  landscaping1: require('../assets/images/Landscaping1.jpg'),
  landscaping2: require('../assets/images/Landscaping2.jpg'),
  sport: require('../assets/images/Sport1.jpg'),
  building3: require('../assets/images/Building3.jpg'),
  building5: require('../assets/images/Building5.jpg'),
  building6: require('../assets/images/Building6.jpg'),
  building7: require('../assets/images/Building7.jpg'),
  building8: require('../assets/images/Building8.jpg'),
  batteries: require('../assets/images/Solarbatteries.jpg'),
  building9: require('../assets/images/cond.jpg'),
  land1: require('../assets/images/img.jpeg'),
  roof: require('../assets/images/roof.jpg'),
  
  // twitter: require('../../../assets/images/twIcon.png')
}

const App = () => {
  const videos = ['https://youtu.be/kqPWc4CBB_0', 'https://youtu.be/6zzfSINrRF4', 'https://youtu.be/W3U9Fg5tndA', 'https://youtu.be/ST3Hygf3G44', 'https://youtu.be/qZ6xl_OAIE8']
  const [states, setStates] = useState({
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
    six: false,
    seven: false
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
                      <img className='foto' src={images.building3} />
                      <p className='rowText'>Outside tables</p>
                    </div>
                    
                    <div className='block'>
                      <img className='foto' src={images.build2} />
                      <p className='rowText'>Awning at the cottage house</p>
                    </div>

                    <div className='block'>
                      <img className='foto' src={images.floor} />
                      <p>Floor replacement</p>
                    </div>
                    

                    <div className='block'>
                      <img className='foto' src={images.building5} />
                      <p className='rowText'>Beds</p>
                    </div>

                    <div className='block'>
                      <img className='foto' src={images.building6} />
                      <p className='rowText'>Bed linen</p>
                    </div>

                    <div className='block'>
                      <img className='foto' src={images.building7} />
                      <p className='rowText'>Portable speaker</p>
                    </div>

                    <div className='block'>
                      <img className='foto' src={images.building8} />
                      <p className='rowText'>Fridge</p>
                    </div>

                    <div className='block'>
                      <img className='foto' src={images.building9} />
                      <p className='rowText'>Room air conditioners</p>
                    </div>
                
                    <div className='block'>
                      <img className='foto' src={images.roof} />
                      <p className='rowText'>A roof for arena place</p>
                    </div>
                  </div>
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
                    <img className='foto' src={images.sport} />
                  </div>
                  : null

                }
              </div>

              <div className='contentBlock'>
                <p>Landscaping</p>
                <button onClick={() => updadeButtons('five', !states.five)}>{states.five ? 'hide' : 'show'}</button>
                {
                  states.five ?
                  <div>
                    <img className='foto' src={images.landscaping1} />
                    <img className='foto' src={images.landscaping2} />
                    <img className='foto' src={images.land1} />
                  </div>
                  : null

                }
              </div>

              <div className='contentBlock'>
                <p>Laundary place</p>
                <button onClick={() => updadeButtons('six', !states.six)}>{states.six ? 'hide' : 'show'}</button>
                {
                  states.six ?
                  <div>
                    <img className='foto' src={images.laundry1} />
                    <img className='foto' src={images.laundry2} />
                    <img className='foto' src={images.laundry3} />
                    <img className='foto' src={images.laundry4} />
                  </div>
                  : null

                }
              </div>

              <div className='contentBlock'>
                <p>Solar batteries</p>
                <button onClick={() => updadeButtons('seven', !states.seven)}>{states.seven ? 'hide' : 'show'}</button>
                {
                  states.seven ?
                  <div>
                    <img className='foto' src={images.batteries} />
                  </div>
                  : null

                }
              </div>
              
              </div>
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
