// // const express = require("express");
// // const app = express();
// // const port = 8080;

// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());
// app.get("/register", (req,res) =>{
//     let {user, password} =  req.query;
//     res.send(`standard get Response, welcome ${user}!`);
// });

// app.post("/register", (req,res) =>{
//     let {user, password} =  req.query;
//     res.send(`standard post Response, Welcome ${user}!!`);
// });

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });


const express = require("express");
const app = express();
const port = 4000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/register", (req, res)=>{
    let {user, password} = req.query;
    res.send(`Standard get Response, Welcome ${user} !`);
});
app.post("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`standard post response, Welcome ${user}!!!`);
});
app.listen(port, () => {
    response.send(`listeingin on port ${port}`);
});
