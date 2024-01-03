# Creating the Final Exam Boilerplate

Clone the [OG repo from github](https://github.com/covalence-io/ts-react-express-esbuild)

-   `rm -rf .git && git init && git add . && git commit -m "Initialized repo"`

-   Add in libraries and types `npm install dotenv react-router-dom @types/react-router-dom mysql @types/mysql passport passport-jwt passport-local @types/passport @types/passport-jwt @types/passport-local bcrypt @types/bcrypt jsonwebtoken @types/jsonwebtoken`

-   Create `.env` and delete it from the gitignore **_FOR JUST THIS REPO ONLY_**

-   Add envars and setup config directory

-   Create types and add them to both server and client directories

-   Import middlewares and comment them out until the DB queries to interact with a user are already done (otherwise you'll get a gazillion errors)

-   Optional server side utilities (JWT signing function, bcrypt hashing and comparing functions)

-   Client side - add services like your API helper/fetchExtender, possibly something like an alert service using Sweetalert2 for automatic error notifications

# Practicing

Clone your repo from yourself, cd into the new project folder, `rm -rf .git && git init && git add . && git commit -m "Initialized repo"`, and go nuts
