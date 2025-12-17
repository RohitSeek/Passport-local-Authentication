module.exports.getlogin = (req, res) => {   
    res.render('login');
}
module.exports.postlogin = (req, res) => {
    // const {username,password}=req.body;
    // res.send(`from log in route post ${username,password}`);
    res.send(req.user)
}