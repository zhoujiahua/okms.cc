module.exports = (app) => {
    app.use('/api/users', require('./users/index'));
    app.use('/api/check', require('./check/index'));
}