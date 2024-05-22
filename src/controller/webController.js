import express from 'express'; 
import db from "../models/index";

let homeControl = async (req, res) => {
    try {
        const users = await db.User.findAll({
            attributes: ['id', 'name']
         });
        console.log(users);
    } catch (e) {
        console.log(e)
    }
    return res.render('homePage.ejs');
}

export default {
    homeControl: homeControl,
}
