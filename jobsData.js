const fs = require("fs");

let rawData = fs.readFileSync("Data/jobsData.csv","utf8");

let linesArray = rawData.split("\n");

console.log(linesArray[0]);

let headings = linesArray[0].split(",") ;

console.log(headings);
console.log(headings.length);
class Job {
  constructor(string){
    let currentJob = string.split(",");
      for (let i = 0; i < headings.length; i++) {
        this[headings[i]]= currentJob[i];
      }
      // this[headings[0]]= currentJob[0];
      // this[headings[1]]= currentJob[1];
      // this.ST= currentJob[0];
  }
}
firstJob = [];
for (let i = 1; i < linesArray.length-1; i++) {
  firstJob.push(new Job(linesArray[i]));
}
// let firstJob = new Job(linesArray[2]);
console.log(firstJob[first.length-1]);
