const cookieParser = require('cookie-parser');
const passportJWT = $re('/utils/passport.js');
const session = require('express-session');
const passport = require('passport');
const morgan = require("morgan");
// const helmet = require("helmet");
const cors = require('cors');

module.exports = (app) => {
    app.use(morgan("dev"));
    app.use(cookieParser());
    // app.use(helmet());
    require('colors');
    app.use(cors());

    // Used session
    app.use(session({
        secret: 'Ok@ccmet',
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: true,
            maxAge: 1000 * 60 * 30, // Set session time
        }
    }))

    //passport init
    app.use(passport.initialize());
    passportJWT(passport, $re('models/UserModel.js'));

    //Used art template
    app.engine('html', require('express-art-template'));
    app.set('view options', {
        debug: process.env.NODE_ENV !== 'production'
    });
    app.set('view cache', false);
    app.set('views', './views');
    app.set('view engine', 'html');
}