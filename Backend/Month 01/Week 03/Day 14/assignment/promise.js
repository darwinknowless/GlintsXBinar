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

/*
readFile("./content/content1.txt", "utf-8")
  .then((content1) => {
    console.log(content1);
    return readFile("./content/content2.txt", "utf-8");
  })
  .then((content2) => {
    console.log(content2);
    return readFile("./content/content3.txt", "utf-8");
  })
  .then((content3) => {
    console.log(content3);
    return readFile("./content/content4.txt", "utf-8");
  })
  .then((content4) => {
    console.log(content4);
    return readFile("./content/content5.txt", "utf-8");
  })
  .then((content5) => {
    console.log(content5);
    return readFile("./content/content6.txt", "utf-8");
  })
  .then((content6) => {
    console.log(content6);
    return readFile("./content/content7.txt", "utf-8");
  })
  .then((content7) => {
    console.log(content7);
    return readFile("./content/content8.txt", "utf-8");
  })
  .then((content8) => {
    console.log(content8);
    return readFile("./content/content9.txt", "utf-8");
  })
  .then((content9) => {
    console.log(content9);
    return readFile("./content/content10.txt", "utf-8");
  })
  .then((content10) => {
    console.log(content10);
  })
  .catch((err) => console.log(err));

*/