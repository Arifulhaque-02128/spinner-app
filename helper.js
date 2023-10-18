export const listOfNames = [{name : "ASAD", color : "#eeefff"}, {name : "Rashed", color : "#fffaaa"}, {name : "Salim", color : "#aaabbb"}, {name : "SARA", color : "#eacbff"}, {name : "Sumon", color : "#dddaaa"}, {name : "Fatah", color : "#cccbbb"}]

export const getWinner = (angle, markerAngle) => {
    console.log("Get WInner : ", angle)
    const currentAngle = (angle + markerAngle)%360;
    if(currentAngle >= 0 && currentAngle < 30) {
        return ["Rasehed", currentAngle]
    }
    else if(currentAngle >= 30 && currentAngle < 90){
        return ["Asad", currentAngle]
    }
    else if(currentAngle >= 90 && currentAngle < 150){
        return ["Fatah", currentAngle]
    }
    else if(currentAngle >= 150 && currentAngle < 210){
      return ["Sumon", currentAngle]
    }
    else if(currentAngle >= 210 && currentAngle < 270){
        return ["Sara", currentAngle]
    }
    else if(currentAngle >= 270 && currentAngle < 330){
        return ["Salim", currentAngle]
    } 
    else if(currentAngle >= 330 && currentAngle < 360){
        return ["Rasehed", currentAngle]
    }
  }