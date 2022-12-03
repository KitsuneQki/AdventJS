distributeGifts = (packOfGifts, reindeers) => {
    const packOfGiftsWeight = packOfGifts.join("").length
    const reindeersCanCarry = reindeers.join("").length * 2
  
    return Math.floor(reindeersCanCarry /packOfGiftsWeight)
  }