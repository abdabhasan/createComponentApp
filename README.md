# create-component

A simple Node.js script to create a new component directory and files in a React project.

### Usage

1.  Clone or download this repository to your local machine.
2.  Open a terminal and navigate to the directory where you saved the files.
3.  Run the script by typing `node create-component.js <dirname>` where `<dirname>`is the name of the directory you want to create, and pressing Enter. For example, `node create-component.js my-component`.
4.  If the directory already exists, the script will prompt you to confirm if you want to overwrite it. Type `y` and press Enter to confirm, or press Enter without typing anything to cancel the operation. If the directory doesn't exist, the script will create it and the two files inside it, and then it will print a confirmation message indicating that the directory and files were created.

### Example

To create a new component directory called `My New Component` and its associated files, run the following command:

    node create-component.js my new component

This will create a directory named `My New Component` in the `components` directory, with files named `My New Component.jsx` and `My New Component.scss`.

Note that the first letter of each word in the directory name will be capitalized automatically.

### License

This script is released under the [MIT License](https://choosealicense.com/licenses/mit/). Feel free to use it for any purpose, commercial or non-commercial.
