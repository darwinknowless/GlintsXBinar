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

const readAllFiles = async () => { // async : agar fungsi await bisa jalan
    try {
        // await : system antri, mengeksekusi file content1 dulu hingga selesai baru lanjut file berikutnya
        let content1 = await readFile("./contents/content1.txt", "utf-8");
        let content2 = await readFile("./contents/content2.txt", "utf-8");

        console.log(content1 + content2);
    } catch (e) {
        console.log("It's error!");
    }
};

readAllFiles();