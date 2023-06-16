import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const App = express();
App.use(cors());
App.use(bodyParser.json()); // to support JSON-encoded bodies
App.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
App.use(express.json()); // to support JSON-encoded bodies
App.use(express.urlencoded()); // to support URL-encoded bodies

App.use(express.urlencoded({ extended: false }));

App.listen(4040, console.log("start"));
App.post("/contact-us", (req, res) => {
  console.log(req.body);
  return res.send("Success");
});
