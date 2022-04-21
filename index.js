const colors = ["darkgreen", "darkblue", "yellow", "orange", "green", "purple", "darkpurple" ]



function search(arr, word) {
   const result = arr.filter(element => element.includes(word))

   return result
}

/* console.log(search(colors, "dark")); */

module.exports = search