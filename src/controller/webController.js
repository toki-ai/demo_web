import express from 'express'; 
import db from "../models/index";

let homeControl = async (req, res) => {
    let users = null;
    try {
        users = await db.User.findAll();
        return res.render('homePage.ejs', {data : users});
    } catch (e) {
        console.log(e)
    }
}

export default {
    homeControl: homeControl,
}
