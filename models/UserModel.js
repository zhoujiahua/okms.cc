const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SvSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    multi_depart: Number,
    userInfo: Object,
    departs: Array,
    token: String,
    updateTime: {
        type: Date,
        default: Date.now().toString(),
    },
    createDate: {
        type: Date,
        default: Date.now().toString(),
    }
})

exports.SvUser = mongoose.model('svusers', SvSchema, 'svusers');