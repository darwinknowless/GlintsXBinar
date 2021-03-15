const EventEmitter = require('events'); // Import event from module
 // Initialize an instance because it is a class
const my = new EventEmitter(); // Declare new event

// Event listener
function masIrvan() {
    console.log("Mas Irvan");
}
my.on("Mas Irvan", () => { // Function bisa ditulis atau di ganti "=>"
    console.log("Halo Mas Irvan");
  })

my.emit("Some Event"); // Event emitter
my.emit("Some Event"); // Ebisa di panggil 2x, sama seperti function
// my.emit("Some Event");
// Output: Some Event Happened
// on === emit (String-nya harus sama persis)
// saat kita isi di emit, jika on tidak ada, maka tidak akan tampil