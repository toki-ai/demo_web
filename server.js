import express from 'express';
import initWebRoute from './src/routes/route.js';
import viewEngine from './src/config/viewEngine.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express(); 
const port = process.env.PORT || 9999; 

initWebRoute(app);
viewEngine(app);

app.listen(port, () => {
    console.log(`Your server is running.`); 
})