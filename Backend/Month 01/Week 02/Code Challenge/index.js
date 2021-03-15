const data = require('./lib/arrayFactory.js'); // linked to file inside lib
const test = require('./lib/test.js'); // linked to file inside lib

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter(i => typeof i === 'number'); // fungsi clean null
}

// Should return array
function sortAscending(inputArr) {
  // Code Here
  inputArr = clean(inputArr); // hapus null
  let len = inputArr.length; // nyari tau jumlah/banyak array
  let checked;
  do { // fungsi looping ascending
      checked = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) { // Proses swap
              let tmp = inputArr[i]; // "temp" untuk simpan data smentara hasil pergeseran
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp; // "temp" untuk simpan data smentara hasil pergeseran loop
              checked = true;
          }
      }
  } while (checked);
  return inputArr;
}

// Should return array
function sortDecending(inputArr) {
  // Code Here
  inputArr = clean(inputArr); // hapus null
  let len = inputArr.length;
  let checked;
  do { // fungsi looping descending
      checked = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] < inputArr[i + 1]) {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp; // "temp" untuk simpan data smentara hasil pergeseran loop
              checked = true;
          }
      }
  } while (checked);
  return inputArr;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
