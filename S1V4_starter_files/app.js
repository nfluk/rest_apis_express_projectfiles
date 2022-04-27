const express = require("express");
const app = express();

const records = require("./records");

// Send a GET request to /quotes to READ a list of quotes
app.get("/quotes", async (req, res) => {
  const quotes = await records.getQuotes();
  res.json(quotes);
});
// Send a GET request to /quotes/:id to READ (view) a quote
app.get("/quotes/:id", (req, res) => {});
// Send a POST request to /quotes to CREATE a quote
// Send a PUT request to /quotes/:id to UPDATE a quote
// Send a DELETE request to /quotes/:id to DELETE a quote
// Send a GET request to /quotes/quote/random to READ (view) a random quote

app.listen(3000, () => console.log("Quote API listening on port 3000!"));
