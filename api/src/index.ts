import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

const corsSetup = cors({ credentials: true });
app.use(corsSetup);

app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
