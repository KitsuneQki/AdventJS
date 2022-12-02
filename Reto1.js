const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
wrapping = (gifts) => {
    return gifts.map(gift => {
      let wrap = "*".repeat(gift.length + 2)
      return wrap + "\n*" + gift + "*\n" + wrap 
    })
  }
console.log(wrapped)