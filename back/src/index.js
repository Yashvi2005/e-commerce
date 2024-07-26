require('dotenv').config({ path: './.env' })
const db = require("./db")
const app = require('./app')
const port = process.env.PORT || 1254

db()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on http://localhost:${port}/`)
        })
    })
    .catch((error) => {
        console.log("MONGODB conntion Faild error", error)
        process.exit(1)
    })