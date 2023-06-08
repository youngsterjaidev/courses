const express = require("express")
const app = express()
const port = 8080

app.use("/", express.static("react"))

app.get("/test", (req, res) => {
    res.send("Server is running !")
})

app.listen(() => {
    console.log(`Server is running at http://localhost:${port}`)
})