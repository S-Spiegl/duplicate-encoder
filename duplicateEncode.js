function duplicateEncode(word){
  letters = word.split('')
  output = []
  for(let i = 0; i < word.length; i++){
    output.push("(")
  }
  return output.join('')
}

module.exports = duplicateEncode