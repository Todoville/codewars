function reachDestination(distance, speed) {
  let initTime = Math.round(10*(distance/speed))/10;
  let time = Math.round(initTime *2)/2;
  let hourStr = `The train will be there in ${time} hour.`
  let hoursStr = `The train will be there in ${time} hours.`
  let myReply = time === 1 ? hourStr : hoursStr;
  
  return myReply
  }