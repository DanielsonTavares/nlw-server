import express, { response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json(["danielson", "vanessa", "isadora", "dan1"]);
});

app.listen(3333);
