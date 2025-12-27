// function double (n:number){
//     return n * 2
// }

// const result = double(5)
// console.log(result)

function log(message: string): string {
    console.log(message)
    return message
  }

const result = log("hello")
console.log(result)
  