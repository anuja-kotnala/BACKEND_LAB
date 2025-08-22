const fs = require("fs");

const inputFile = "data.txt";

fs.access(inputFile, fs.constants.F_OK, (err) => {
  if (err) {
    console.error("Error: File does not exist.");
    return;
  }

  const readable = fs.createReadStream(inputFile, { encoding: "utf8" });

  readable.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readable.on("end", () => {
    console.log("\nFile read completed.");
  });

  readable.on("error", (error) => {
    console.error("Error while reading file:", error);
  });
});
