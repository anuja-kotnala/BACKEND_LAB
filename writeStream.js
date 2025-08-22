const fs = require("fs");

const writable = fs.createWriteStream("output2.txt");


const data = "Hello, Node.js!";

writable.write(data, "utf8", () => {
  console.log("Data has been written successfully.");
});


writable.end();

writable.on("finish", () => {
  console.log("File write completed!");
});


writable.on("error", (err) => {
  console.error("Error writing to file:", err);
});
