# RNDM Utils

A selection of utility methods used across the suite of RNDM Packages.

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
npm install --save rndm-utils
```

## Documentation
### buildFilesForFolder
Recursive function for buiding a tree of folders and files

```javascript
type File = {
  filename: String, // Filename denoting the file that will be created within the folder context
  string: String, // stringified contet to be written to the
  folders?: Object<String, Array<File>> // Optional object using the key as the path for the next folder
};

const input: File = ...; // Initial files and folder structure to begin building the tree
const path: String = ...; // Initial folder in which to start building the tree
buildFilesForFolder(input, path)
```

### decircular
JSON Stringifier used for removing circular references.

```javascript

const input: Object | Array | String | Number = ...; // Item to convert to JSON String
const spacer: Number(Integer) = 2; // Indentation pretifier
decircular(input, spacer)
```

### mkDir
Recursive function for creating a folder tree.

```javascript

const path: String = 'path/to/make'; // Folder tree to create
const base: String = 'path/to/base/folder; // Folder in which to create new tree
mkDir(path, base)
```

### readDir
Recursive function for reading all files within a folder tree

```javascript

const base: String = 'path/to/base/folder; // Folder that requires all files
readDir(base)
```
