// TODO Have this script run 100 times at each n value then save those results to a log.
// Example: Running n=100
// heads: 41, tails: 59, difference: 16%
// n=200
// heads: 111, tails: 102, difference: 18%
// etc.

const flip_coin = (n) =>{
  results = {
    heads: 0,
    tails: 0,
    get difference(){
      const abs_dif = Math.abs(this.heads - this.tails)
      const avg = (this.heads + this.tails)/2
      return abs_dif/avg * 100
    } 
  }
  for(let i = 0; i < n; i++){
    // get either 0(heads) or 1(tails)
    num = Math.floor(Math.random() * 2)
    console.log(num)

    if(num == 0){
      console.log("Flipped heads!")
      results.heads++
    }
    else{
      console.log("Flipped tails!")
      results.tails++
    }
  }
    return results
}

const result = flip_coin(1000);
console.log(result)
console.log(String(result.difference) + "%") 