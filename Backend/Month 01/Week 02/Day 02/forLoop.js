for (let i = 0; i < 5; i += 2) {
    console.log("Hello World! " + "perulangan ke-" + i);
}

for (let i = 0; i < 5; i ++) {
    console.log(i);
}

// let a = 1;
// a++;
// consoloe.log(a);

// Fibonacci
let b = [0, 1];

for (let i = 0; i < 7; i ++) {
    console.log(`b[` + i + "] = " + b[i]);
    console.log(`b[` + (i + 1) + "] = " + b[i + 1]);
    b[i + 2] = b[i] + b[i +1];
    console.log("hasil -> b[" + (i + 2) + "] = " + b[i + 2]);
}