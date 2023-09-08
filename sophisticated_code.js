/* 
    File: sophisticated_code.js
    Description: This code demonstrates a complex implementation of a file management system in JavaScript.
*/

// Constants
const FILE_SIZE_LIMIT = 1024; // In KB

// Classes
class File {
    constructor(name, size, type, content) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.content = content;
    }

    rename(newName) {
        this.name = newName;
    }

    compress() {
        // Implement compression logic here
    }

    encrypt() {
        // Implement encryption logic here
    }
}

class Folder {
    constructor(name) {
        this.name = name;
        this.files = [];
        this.subFolders = [];
    }

    addFile(file) {
        this.files.push(file);
    }

    removeFile(file) {
        this.files = this.files.filter(f => f !== file);
    }

    addSubFolder(folder) {
        this.subFolders.push(folder);
    }

    removeSubFolder(folder) {
        this.subFolders = this.subFolders.filter(f => f !== folder);
    }
}

// Helper Functions
function calculateFolderSize(folder) {
    let totalSize = 0;
    for (let file of folder.files) {
        totalSize += file.size;
    }
    for (let subFolder of folder.subFolders) {
        totalSize += calculateFolderSize(subFolder);
    }
    return totalSize;
}

// Application Code
const rootFolder = new Folder('Root');

const folder1 = new Folder('Folder 1');
const folder2 = new Folder('Folder 2');

const file1 = new File('File 1', 512, 'txt', 'Hello World!');
const file2 = new File('File 2', 768, 'png', '...');
const file3 = new File('File 3', 256, 'docx', 'Lorem ipsum...');

folder1.addFile(file1);
folder1.addFile(file2);
folder1.addSubFolder(folder2);

folder2.addFile(file3);

rootFolder.addSubFolder(folder1);

console.log("Total size of root folder:", calculateFolderSize(rootFolder));