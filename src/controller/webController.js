import express from 'express'; 
import client from '../config/database.config.js';

let homeControl = async(req, res) => {
    // await client.connect();
    // console.log(await client.query('SELECT NOW()'));
    // await client.end();
    return res.render('homePage.ejs');
}

export default {
    homeControl: homeControl,
}