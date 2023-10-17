'use client'
import styles from './style.module.css'
import { useState } from 'react';

export default function SpinnerWheel() {

  const listOfNames = [{name : "ASAD", color : "#eeefff"}, {name : "Rashed", color : "#fffaaa"}, {name : "Salim", color : "#aaabbb"}, {name : "SARA", color : "#eacbff"}, {name : "Sumon", color : "#dddaaa"}, {name : "Fatah", color : "#cccbbb"}]

  const [names, setNames] = useState(listOfNames)
  const [spinState, setSpinState] = useState(null)
  const [winner, setWinner] = useState('')

  const getWinner = (angle) => {
    console.log("Get WInner : ", angle)
    if(angle >= 0 && angle < 30){
      setWinner("Rashed")
    }
    else if(angle >= 30 && angle < 90){
      setWinner("Asad")
    }
    else if(angle >= 90 && angle < 150){
      setWinner("Fatah")
    }
    else if(angle >= 150 && angle < 210){
      setWinner("Sumon")
    }
    else if(angle >= 210 && angle < 270){
      setWinner("Sara")
    }
    else if(angle >= 270 && angle < 330){
      setWinner("Selim")
    } else if(angle >= 330 && angle < 360){
      setWinner("Rashed")
    }
  }

  // const stopWheel = (time) => {
  //   console.log("time : ", time);
  //   setTimeout(() => {
  //     setSpinState('stop')
  //   }, time)
  // }

  // const resetWheel = (angle) => {
  //   console.log("Angle : ", angle)
  //   setTimeout(() => {
  //     setSpinState('spinning')
  //     const timeDuration = (angle/360) * 1000;
  //     console.log(timeDuration);
  //     stopWheel(timeDuration)
  //   }, 5000)
  // }

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
        // resetWheel(360-totalAngle);
      }, randomDuration)
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
        <div className='text-center mt-15'>
          Winner: {winner}
        </div>
      )}
  
    </main>
  )
}
