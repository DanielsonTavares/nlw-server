import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listta de contas");
  response.json(["danielson", "vanessa", "isadora", "dan1"]);
});

app.listen(3333);

/*
para usar o typescript
- instalar as definições de tipos: npm install @types/express
- instalar o ts-node para poder executar os scripts no terminal: npm install ts-node
- criar arquivo de configuração do typescript: npx tsc --init
- para rodar um script: npx ts-node src/server.ts (npm run dev)
- para monitorar modificações durante o desenvolvimento: npm install ts-node-dev -D
*/
