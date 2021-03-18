// Import fs
const fs = require("fs");// file system

// Make promise object
const readFile = (file, option) =>
    new Promise((success, failed) => {
        fs.readFile(file, option, (err, content) => {
            if (err) failed(err);
            return success(content);
        });
    });

readFile("./contents/content1.txt", "utf-8") // Focus on this : from here
    .then((content1) => {
        console.log(content1);
        return readFile("./contents/content11.txt", "utf-8");
    })
    .then((content2) => {
        console.log(content2);
    })
    .catch((err) => console.log(err)); // Focus on this : End here