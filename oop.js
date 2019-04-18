// oop with mosh

console.log("Object Oriented Programming with JavaScript");

function Stopwatch(){
  //Private Methods
  let startTime, endTime, running, duration = 0;

  //Public Methods
  this.start = function() {
    if (running)
    throw new Error("Already Started");
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running)
    throw new Error("Not Started");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

let sw = new Stopwatch();

sw.start();
sw.stop();
console.log(sw.duration);
console.log("Fail");

}
