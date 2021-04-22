
module.exports = (req, res, next) => {
    if (req.url === '/main') res.redirect('/');
    next();
}