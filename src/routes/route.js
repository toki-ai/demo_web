import express from "express";
import webController from "../controller/webController.js";

let Route = express.Router();

let wedRoute = (app) => { 
    Route. get( '/' , webController.homeControl);
    app.use("/", Route) ;
}

export default wedRoute;