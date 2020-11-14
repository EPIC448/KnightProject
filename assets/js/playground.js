let reveseInt = (num) => {
    
    let revInt = num.toString('').split('').reverse().join('')
    return parseInt(revInt) * Math.sign(num)
}

console.log(reveseInt([-234]))


const findLongestWord = (sen) => {
    let senSplit = sen.split('')

    let senSort = senSplit.sort(function (a, b) {
        return b.length - a.length 
       
    })
    
    const longWordArray = senSort.filter(function (word) {
        if (senSort[0].length === word.length) {
            return senSort
        } else
            return longWordArray[0]
    })
   return longWordArray[0]
      //console.log(senSort)
 }

console.log(findLongestWord("i jump all day"))


