module.exports = (app) => {
    // Main view
    app.use('/', require('./main/common/index'));
    app.use('/main/users', require('./main/users/index'));
    app.use('/main/content', require('./main/content/index'));

    // Admin view
    app.use('/admin', require('./admin/common/index'));
    app.use('/admin/users', require('./admin/users/index'));
    app.use('/admin/content', require('./admin/content/index'));
}