const { SvUser } = $re('/models/UserModel.js');
const { SURVER_ACCOUNT } = $re('/config/secure.js');
const { health } = $re('/store/data.js');
const { apis } = $re('/config/urls.js');
const Validator = require("validator");
const axios = require('axios');
// http://axios-js.com/zh-cn/docs/
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

exports.getUser = async (req, res) => {
    try {
        const r = req.query;
        if (!r.username) return res.status(400).json({ success: false, msg: '参数不能为空！' });
        const checkUser = SURVER_ACCOUNT.filter(item => item.username == r.username);
        if (!checkUser.length) return res.status(400).json({ success: false, msg: '用户不存在！' });
        const { data } = await axios.post(apis.surveyLogin, checkUser[0]);
        if (!data.success) return res.status(400).json(data);
        const newUser = Object.assign(checkUser[0], data.result);
        const findUser = await SvUser.findOne({ phone: newUser.phone });
        if (findUser) {
            newUser.updateTime = Date.now().toString();
            const updateUser = await SvUser.findByIdAndUpdate(findUser.id, newUser, { new: true });
            return res.status(200).json(updateUser);
        } else {
            const saveUser = await new SvUser(newUser).save();
            return res.status(200).json(saveUser);
        }
    } catch (error) {
        throw error
    }
}

exports.addInfo = async (req, res) => {
    try {
        const r = req.query;
        if (!r.username) return res.status(400).json({ success: false, msg: '用户参数不能为空！' });
        if (!r.type) return res.status(400).json({ success: false, msg: '类型参数不能为空！' });
        const findUser = await SvUser.findOne({ username: r.username });
        if (!findUser) return res.status(400).json({ success: false, msg: '用户不存在！' });
        const healthInfo = health(r.type);
        if (!healthInfo) return res.status(400).json({ success: false, msg: '健康信息不能为空！' });
        axios.defaults.headers.common['X-Access-Token'] = findUser.token;
        const { data } = await axios.post(apis.surveyAdd, healthInfo);
        return res.status(200).json(data);
    } catch (error) {
        throw error
    }
}