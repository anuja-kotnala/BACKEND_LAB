import { readFile } from "fs";

const inputFile = "asyncInput.txt";

readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error: File not found.");
    return;
  }
  console.log(data);
});
