import express from "express";
import webController from "../controller/webController.js";

let route = express.Router();

let initWebRoute = (app) => { 
    route. get( '/' , webController.homeControl);
    app.use("/", route) ;
}

export default initWebRoute;