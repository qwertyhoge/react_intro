import express from "express";
import fs from "fs";
import path from "path";
import fetch from "node-fetch"


function fetchTestData() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.movies);
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

const app = express();

const public_path = path.resolve(process.cwd(), "public/");
app.use(express.static(public_path));

console.log(fetchTestData());

app.get('/', (req, res)=>{
    const index = fs.readFileSync("./public/index.html", "utf-8");
    res.send(index);
});

app.listen(3000, ()=>{
  console.log('App listening on 3000');
  /*
  console.log(path.resolve(process.cwd()));
  console.log(path.resolve(__dirname));
  console.log(path.resolve("/"));
  */
});