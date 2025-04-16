# oct24-t2w2-nodeintro

# Init
    Start with "npm init" in terminal to create package.json file

# Install
    "npm i" to install packages
    Start with "npm i express" to install express
    Packages installed in node_modules folder
    Dependecies in package.json tracks requirements
    package-lock.json contains more detail about the package install, as well as its dependencies
    Package JSON files should never be edited by hand - delete and regenerate if required

# Gitignore
    Required
    Add node_modules and package-lock.json
    Both can be regenerated

# Rebuilding
    To rebuild node_modules and package-lock.json (esp when downloading a gitignored repo):
    "npm i"

# Funding
    "npm fund"
    Allows you to generate details to support developers via philanthropic funding links to packages used

# Launch server
    "node [file]"
    "node --watch [file]" to watch for live updates

# Scripts
    Add scripts to package.json to launch custom code:
    "dev": "node --watch index.js"
    "npm run dev" creates shortcut to replace "node index.js"

# Mongoose
    Install - npm i mongoose
    Import into index.js

# MongoDB default port
    Run mongosh to determine

# Mongosh
    show dbs
    connect to db via mongoose connection string
    db not created until a collection is created
    use nodeintro_db

# MongoDB extension
    Extension installed on LHS menu for better DB navigation