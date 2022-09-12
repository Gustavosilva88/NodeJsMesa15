let FizzBuzz = (a, b) => {
  for (i = 0; i <= 100; i++) {
    if ((i % a == 0) && (i % b == 0)) {
      console.log("FIZZBUZZ")
    }
    else if (i % a == 0) {
      console.log("FIZZ")
    }
    else if (i % b == 0) {
      console.log("BUZZ")
    }

  }
}
FizzBuzz(10, 1);