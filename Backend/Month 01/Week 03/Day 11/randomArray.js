const data = [];
const randomNumber = Math.floor(Math.random() * 100); // Random number < 100
// (math.floor) untuk ngilangin decimal dari angka

console.log(randomNumber);

for (var i = 0; i < randomNumber; i ++) { // Random number < 100
    data.push(createArrayEelement());
}

function createArrayEelement() {
    let dataRandom = Math.floor(Math.random() * 1000);

    return [null, dataRandom, 1][Math.floor(Math.random() * 3)];
}

console.log(data);