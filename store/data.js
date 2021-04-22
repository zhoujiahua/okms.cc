const work = {
    "isCold": "否",
    "seeDoctor": "",
    "businessTravel": "否",
    "returnTools": "",
    "leaveCompanyLocation": "否",
    "coldFamily": "",
    "leaveWay": "",
    "isolate": "否",
    "isWorking": "是",
    "familyIsHome": "",
    "overseas": "否",
    "temperature": "36.5",
    "alreadyReturn": "",
    "name": "周家华",
    "englishName": "JerryZhou",
    "phone": "17629269055",
    "idCard": "612427199107220010",
    "company": "西安华讯",
    "department": "STS",
    "team": "ADV-RND",
    "location": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "holidayRegion": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "workWay": "公司笔记本或公司PC电脑",
    "workType": "Office值班/协作(工作)",
    "feiyanIsTouch": "否",
    "isPassGd": "否",
    "help": "无",
    "coldReason": "",
    "coldDate": "",
    "hospitalName": "",
    "noWorkReason": "",
    "trainNumber": "",
    "overseasReason": "",
    "isolateInfo": ""
}

const weekend = {
    "isCold": "否",
    "seeDoctor": "",
    "businessTravel": "否",
    "returnTools": "",
    "leaveCompanyLocation": "否",
    "coldFamily": "",
    "leaveWay": "",
    "isolate": "否",
    "isWorking": "否",
    "familyIsHome": "",
    "overseas": "否",
    "temperature": "36.5",
    "alreadyReturn": "",
    "name": "周家华",
    "englishName": "JerryZhou",
    "phone": "17629269055",
    "idCard": "612427199107220010",
    "company": "西安华讯",
    "department": "STS",
    "team": "ADV-RND",
    "location": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "holidayRegion": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "workWay": "",
    "workType": "",
    "feiyanIsTouch": "否",
    "isPassGd": "否",
    "help": "无",
    "coldReason": "",
    "coldDate": "",
    "hospitalName": "",
    "noWorkReason": "周末",
    "trainNumber": "",
    "overseasReason": "",
    "isolateInfo": ""
}

const vacation = {
    "isCold": "否",
    "seeDoctor": "",
    "businessTravel": "否",
    "returnTools": "",
    "leaveCompanyLocation": "否",
    "coldFamily": "",
    "leaveWay": "",
    "isolate": "否",
    "isWorking": "否",
    "familyIsHome": "",
    "overseas": "否",
    "temperature": "36.5",
    "alreadyReturn": "",
    "name": "周家华",
    "englishName": "JerryZhou",
    "phone": "17629269055",
    "idCard": "612427199107220010",
    "company": "西安华讯",
    "department": "STS",
    "team": "ADV-RND",
    "location": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "holidayRegion": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "workWay": "",
    "workType": "",
    "feiyanIsTouch": "否",
    "isPassGd": "否",
    "help": "无",
    "coldReason": "",
    "coldDate": "",
    "hospitalName": "",
    "noWorkReason": "请假",
    "trainNumber": "",
    "overseasReason": "",
    "isolateInfo": ""
}

const other = {
    "isCold": "否",
    "seeDoctor": "",
    "businessTravel": "否",
    "returnTools": "",
    "leaveCompanyLocation": "否",
    "coldFamily": "",
    "leaveWay": "",
    "isolate": "否",
    "isWorking": "否",
    "familyIsHome": "",
    "overseas": "否",
    "temperature": "36.5",
    "alreadyReturn": "",
    "name": "周家华",
    "englishName": "JerryZhou",
    "phone": "17629269055",
    "idCard": "612427199107220010",
    "company": "西安华讯",
    "department": "STS",
    "team": "ADV-RND",
    "location": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "holidayRegion": "陕西省西安市长安区韦曲北街风憬天下西区12号楼",
    "workWay": "",
    "workType": "",
    "feiyanIsTouch": "否",
    "isPassGd": "否",
    "help": "无",
    "coldReason": "",
    "coldDate": "",
    "hospitalName": "",
    "noWorkReason": "其他原因",
    "trainNumber": "",
    "overseasReason": "",
    "isolateInfo": ""
}

exports.health = (type) => {
    if (!type || isNaN(type)) return null;
    let info = {};
    switch (Number(type)) {
        case 1:
            // 工作
            info = Object.assign(info, work);
            break;
        case 2:
            // 周末
            info = Object.assign(info, weekend);
            break;
        case 3:
            // 请假
            info = Object.assign(info, vacation);
            break;
        case 4:
            // 其他
            info = Object.assign(info, other);
            break;
        default:
            info = null
    }
    return info;
}