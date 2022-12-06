function createCube(size) {
    let up = "", down = ""
    for(let i=1; i <= size; i++) {
      up += (`/\\`).repeat(i).padStart(size+i)
      up += `${('_\\').repeat(size)}\n`
      down += ('\\/').repeat(size-i+1).padStart(size+(size-i+1))
      down += `${('_/').repeat(size)}\n`
    }
    return up + down.slice(0, -1)
  }