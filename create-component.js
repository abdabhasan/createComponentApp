const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Get the directory names from the command line arguments
const dirnames = process.argv.slice(2);

if (dirnames.length === 0) {
  console.error(
    "Error: at least one directory name must be provided as a command line argument."
  );
  process.exit(1);
}

// Create each directory
dirnames.forEach((dirname) => {
  // Capitalize the first letter of each word in dirname
  const capitalizedDirname = dirname.replace(/(?:^|\s)\S/g, (match) =>
    match.toUpperCase()
  );

  // Check if the directory already exists
  const dirPath = path.join("../Components", capitalizedDirname);

  if (fs.existsSync(dirPath)) {
    // Prompt the user to confirm if they want to overwrite the existing directory
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `Directory '${dirPath}' already exists. Do you want to overwrite it? (y/N) `,
      (answer) => {
        rl.close();

        if (answer.toLowerCase() !== "y") {
          console.log("Skipping directory.");
          return;
        }

        createDirectory();
      }
    );
  } else {
    createDirectory();
  }

  function createDirectory() {
    // Create the directory and the files inside it
    fs.mkdirSync(dirPath);
    fs.writeFileSync(
      path.join(dirPath, `${capitalizedDirname}.jsx`),
      `import "./${capitalizedDirname}.scss";

      const ${capitalizedDirname} = () => {
        return <div>${capitalizedDirname}</div>;
      };
      
      export default ${capitalizedDirname};
      `
    );
    fs.writeFileSync(
      path.join(dirPath, `${capitalizedDirname}.scss`),
      "/* Your SCSS code here */"
    );

    // Confirm that the directory and files were created
    console.log(
      `Directory '${dirPath}' and files '${capitalizedDirname}.jsx' and '${capitalizedDirname}.scss' were created.`
    );
  }
});
