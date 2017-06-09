// Crashes in-browser text editor
//Would potentially work using else if statements...

var range = function(start, end, step) {
  switch(start, end, step) {
    case (start, end, step === undefined):
      return[];
    case (end < start):
      return [];
    case (step <= 0):
      return [];
    default:
      var some_array = [];
      for (var i = start; i <= end; i += step) {
        some_array.push(i);
      }
    return some_array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
