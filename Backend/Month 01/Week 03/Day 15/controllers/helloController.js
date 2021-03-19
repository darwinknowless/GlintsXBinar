// Make HelloController Class
class HelloController {
    
    // GET
    get (req, res) {
        console.log("This is my first backend!"); // console bebas
        res.send(`Hello, Postman (GET), ${req.query.name}!`); // hanya sekali aka return
        // res.send(`Hello, Postman (GET), ${req.params.name}!`);
    };
    
    // POST
    post (req, res) {
        console.log("This is example POST!");
        res.send("Hello, POST!");
    };
    
    // PUT
    put (req, res) {
        console.log("This is example PUT!");
        res.send("Hello, PUT!");
    };
    
    // DELETE
    delete (req, res) {
        console.log("This is example DELETE!");
        res.send("Hello, DELETE!");
    };
}

module.exports = new HelloController(); // Export this controller