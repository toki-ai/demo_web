import express from 'express'; 

let viewEngine = (app) => {
    app.use(express.static('.src/public'));
    app.set("views engine", "ejs");
    return app.set('views', './src/views');
}

export default viewEngine;