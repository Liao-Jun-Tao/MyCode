const logLine = 'ab_c_"abc_adadfasd"_def_"dddd"';
const finalArray = [];

let startIndex = 0;
let endIndex = logLine.indexOf('_', startIndex);
finalArray.push(logLine.slice(startIndex, endIndex));
startIndex = endIndex + 1;
endIndex = logLine.indexOf('_', startIndex);
finalArray.push(logLine.slice(startIndex, endIndex));
startIndex = endIndex + 2; 
endIndex = logLine.indexOf('"_', startIndex); 
finalArray.push(logLine.slice(startIndex, endIndex).replace(/_/g, ' '));
startIndex = endIndex + 3; 
endIndex = logLine.indexOf('_', startIndex);
finalArray.push(logLine.slice(startIndex, endIndex));
startIndex = endIndex + 2; 
finalArray.push(logLine.slice(startIndex, logLine.length - 1)); 
console.log(finalArray);
