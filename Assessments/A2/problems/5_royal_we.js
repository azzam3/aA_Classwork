/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  let array = sentence.split(" ")
  let newArray = []
  
  for (let i = 0; i < array.length; i++){
    let word = array[i]

    if (word === "I"){
      newArray.push("we")
    } else if (word === ("mine")){
      newArray.push("ours")
    } else if (word === ("my")){
      newArray.push("our")
    } else if (word === ("me")){
      newArray.push("us")
    } else {
      newArray.push(word)
    }
  }
  return newArray.join(" ")
}

// change into an array
// somehow check each word in the array - loops and replace I with we, mine with ours, my with out and me with us
// .join with a space to reform the sentence

// if word = I return we

console.log(royalWe("I want to go to the store"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
