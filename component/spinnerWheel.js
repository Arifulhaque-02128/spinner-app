'use client'
import { getWinner, listOfNames } from '../helper';
import styles from './style.module.css'
import { useState } from 'react';

export default function SpinnerWheel() {

  const [names, setNames] = useState(listOfNames)
  const [spinState, setSpinState] = useState(null)
  const [winner, setWinner] = useState('')
  const [markerAngle, setMarkerAngle] =  useState(0)

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
        const res = getWinner(totalAngle, markerAngle);
        setWinner(res[0]);
        setMarkerAngle(res[1])
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
              style={{ backgroundColor : `${item.color}`, listStyle : 'none', transform :  `rotate(${idx * (360/names.length)}deg) skewY(${-30}deg)`}}
              className={styles.listStyle}
            >
              <div className={styles.textStyle}> {item.name} </div>
            </li>
          )
          
        }
      </ul>

      <div className='flex flex-row justify-center'>
        <button 
          className={styles.spinBtn}
          onClick={handleStartSpinning}
        > Spin It </button>
      </div>

      <div className='flex flex-row justify-center'>

        {spinState === 'stop' && (
          <div className={styles.popUp}>
            <p className='font-bold text-lg'>{`"${winner}" is winner`}</p>
          </div>
        )}

      </div>
  
    </main>
  )
}
