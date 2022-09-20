class SumApp {
  constructor (){
    this.numbers = [];
    this.sum = 0;

    // add the number with push to the numbers-array
    this.addNumber = (function(number) {
      this.numbers.push(number);
    })
    // add each nummber in numbers to sum
    this.getSum = (function(){
      for (let number of this.numbers){
        this.sum += number;
      }
      return this.sum;
    })
    // reset the numbers array
    this.reset = ( () => {
      return this.numbers = [];
    });
  }
}
