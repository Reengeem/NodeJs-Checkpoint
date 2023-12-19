const fs = require("node:fs");
const data = "Hello Node";

const writeToFile = () => {
  fs.writeFileSync("welcome.txt", data, "utf8");
  console.log("Created a file named welcome.txt");
};

const readFromFile = () => {
  fs.readFile("Hello.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Hello.txt File Does Not exist");
    } else {
      console.log(data);
    }
  });
};

writeToFile();
readFromFile();
