const express = require("express")

const app = express()

app.set("secret", "ashdash7qwe3")

app.use(require("cors")())
app.use(express.json())

//uploads下面都是静态文件托管
//uploads下面都是静态文件托管
app.use("/", express.static(__dirname + "/web"))
app.use("/admin", express.static(__dirname + "/admin"))
app.use("/uploads", express.static(__dirname + "/uploads"))

require("./plugins/db")(app)
require("./routes/admin")(app)
require("./routes/web")(app)

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
