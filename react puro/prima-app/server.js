const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
const port = 5000
const public_path = "build"
const static_path = "build"

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, static_path)))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, public_path, "index.html"))
})

app.listen(port, () => {
    console.log("Server avviato su http://localhost:" + port)
})