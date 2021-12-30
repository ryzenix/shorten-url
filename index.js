const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const redirects = require("./redirects.json");

app.get("/:id", (req, res) => {
    const { id } = req.params;
    const url = redirects[id];
    if (!url) res.status(301).redirect("https://kiribot.xyz")
    res.status(301).redirect(url);
});

app.get("*", (req, res) => {
    res.status(301).redirect("https://kiribot.xyz")
});

app.listen(port, () => {
    console.log(`Redirect app listening at port ${port}`);
});
