'use client'
import styles from './style.module.css'
import { useState } from 'react';

export default function SpinnerWheel() {

  const listOfNames = [{name : "ASAD", color : "#eeefff"}, {name : "Rashed", color : "#fffaaa"}, {name : "Salim", color : "#aaabbb"}, {name : "SARA", color : "#eacbff"}, {name : "Sumon", color : "#dddaaa"}, {name : "Fatah", color : "#cccbbb"}]

  const [names, setNames] = useState(listOfNames)
  const [spinState, setSpinState] = useState(null)
  const [winner, setWinner] = useState('')
  const [markerAngle, setMarkerAngle] =  useState(0)

  const getWinner = (angle) => {
    console.log("Get WInner : ", angle)
    const currentAngle = (angle + markerAngle)%360;
    if(currentAngle >= 0 && currentAngle < 30) {
      setWinner("Rashed")
      setMarkerAngle(currentAngle)
    }
    else if(currentAngle >= 30 && currentAngle < 90){
      setWinner("Asad")
      setMarkerAngle(currentAngle)
    }
    else if(currentAngle >= 90 && currentAngle < 150){
      setWinner("Fatah")
      setMarkerAngle(currentAngle)
    }
    else if(currentAngle >= 150 && currentAngle < 210){
      setWinner("Sumon")
      setMarkerAngle(currentAngle)
    }
    else if(currentAngle >= 210 && currentAngle < 270){
      setWinner("Sara")
      setMarkerAngle(currentAngle)
    }
    else if(currentAngle >= 270 && currentAngle < 330){
      setWinner("Selim")
      setMarkerAngle(currentAngle)
    } 
    else if(currentAngle >= 330 && currentAngle < 360){
      setWinner("Rashed")
      setMarkerAngle(currentAngle)
    }
  }

  const handleStartSpinning = () => {
    console.log(spinState)
    if(!(spinState === 'spinning')){
      console.log(spinState)
      setSpinState('spinning')
      const randomDuration = Math.floor(Math.random() * 3000 + 1000)
      
      console.log(randomDuration)
      const totalAngle = ((randomDuration/1000) * 360) % 360;
      
      setTimeout(() => {
        console.log("inside set ---- ", totalAngle)
        setSpinState('stop');
        getWinner(totalAngle);
      }, randomDuration-30.8)
    }
  }

  return (
    <main>

      <div className={styles.arrow_container}>
        <div className={styles.arrow}></div>
      </div>

      <ul className={`${styles.circle} ${spinState === 'spinning' ? styles.start_rotate : `${styles.start_rotate} ${styles.stop_rotate}`}`}>
      
        <div className={styles.center}>
        </div>
        
        {
          names.map((item, idx) => 
            <li key={idx}
              style={{ backgroundColor : `${item.color}`, listStyle : 'none', transform :  `rotate(${idx * 60}deg) skewY(${-30}deg)`}}
              className={styles.listStyle}
            >
              <div className={styles.textStyle}> {item.name} </div>
            </li>
          )
          
        }
      </ul>

      <button 
        className={styles.spinBtn}
        onClick={handleStartSpinning}
      > Spin It </button>

      {spinState === 'stop' && (
        <div className='flex justify-center mt-55'>
          Winner: {winner}
        </div>
      )}
  
    </main>
  )
}
