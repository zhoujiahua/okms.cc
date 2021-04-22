const { MONGO_URL } = require('./../config/secure');
const mongoose = require("mongoose");
module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Database connection successful...');
    } catch (error) {
        throw error;
    }
}