const EventEmitter = require('events'); // Import event from module
 // Initialize an instance because it is a class
const my = new EventEmitter(); // Declare new event

// Event listener
my.on("Some Event", function() { // Function bisa ditulis atau di ganti "=>"
    console.log("Some Event Happened")
  })

my.emit("Some Event"); // Event emitter
my.emit("Some Event"); // Ebisa di panggil 2x, sama seperti function
// Output: Some Event Happened
// on === emit (String-nya harus sama persis)
// saat kita isi di emit, jika on tidak ada, maka tidak akan tampil