// This is Array object data type
let person = {
    name: "Darwin Knowless",
    pets:[ 
            {
                name: "Jenny",
                type: "cat",
            },
            {
                name: "Jessy",
                type: "cat",
            },
        ],   
    languages: ["Javanese", "Indonesian", "English"]
};

console.log("Name: " + person.name); // it will call the name person
console.log("Pet's name : " + person.pets[0].name); // it will call Jenny
console.log("Language: " + person.languages[1]); // it will call Indonesian