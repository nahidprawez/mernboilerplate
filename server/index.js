// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/client/dist`
    : `${process.cwd()}/client/`;

const app = express();

app.use(express.json());

app.use(serveStatic(STATIC_PATH, { index: false }));

app.get("/*", (req, res) => {
   res.status(200).set('Content-Type', 'text/html').send(readFileSync(join(STATIC_PATH, 'index.html')));
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
