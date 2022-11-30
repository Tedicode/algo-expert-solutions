"use strict";

const fs = require("fs");
const axios = require("axios");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'topArticles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER limit as parameter.
 * base url for copy/paste:
 * https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>
 */

let https = require("node:https");

async function topArticles(limit) {
  let response = await https
    .get(
      "https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>",
      (res) => {
        res.on("data", (data) => process.stdout.write(data));
      }
    )
    .on("error", (e) => console.log(e));

  let arrayOfArticles;

  response.data.forEach((article) => {
    if (article.title !== null) article.name = article.title;
    else if (article.story_title !== null) article.name = article.story_title;
    if (article.name) arrayOfArticles.push(article);
  });

  return arrayOfArticles
    .filter((art) => art.num_comments !== null)
    .sort((a, b) => b.name - a.name)
    .sort((a, b) => b.num_comments.length - a.num_comments.length)
    .slice(0, limit)
    .map((art) => art.title)
    .join("\n");

  // make the request
  // capture the response, on which you'll find data property, the array of articles
  // filter, sort and shorten that array before returning it, according to the requirements
  // .map from the array of whole objects to array of just elements containing title, story_title, and num_comments
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const limit = parseInt(readLine().trim(), 10);

  const result = await topArticles(limit);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
