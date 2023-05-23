const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(
    cors({
        origin: "*",
    })
);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome To PWA... 🚀");
});

app.post("/manifest/update", (req, res) => {
    const stringJSON = JSON.stringify(req.body.data);
    const fileName = req.body.fileName || "dynamicManifest.json"

    fs.writeFile(`./public/${fileName}`, stringJSON, (err) => {
        if (err) {
            console.log("Error writing file", err);
            res.json({ status: "false", message: "Error writing file" });
        } else {
            console.log("Successfully wrote file");
            res.json({ status: "Done", url: `/public/${fileName}` });
        }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});
