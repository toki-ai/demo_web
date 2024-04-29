import express from 'express';
import wedRoute from './src/routes/route.js';
import viewEngine from './src/config/viewEngine.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express(); 
const port = process.env.PORT; 

wedRoute(app);
viewEngine(app);

app.listen(port, () => {
    console.log(`your server in ${port}`); 
})