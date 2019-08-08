let mysql = require('mysql');
let database = mysql.createConnection({
    host: '39.97.109.77',
    password: '123456',
    database: 'bcmanage',
    user: 'root'
})
// 登录接口
exports.login = function (userdata) {
    const {
        username,
        password
    } = userdata;
    let sql = `select * from whitelist where username="${username}" and password="${password}" and id`;
    return new Promise((resolve, reject) => {
        database.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

exports.read = function (listData) {
    // let sql = 'select * from `class-opening-plan`';
    // let sql = 'select * from `class-opening-plan`';
    let sql = 'select * from `class-opening-plan`';
    return new Promise((resolve, reject) => {
        database.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

exports.create = function (listData) {
    // console.log(listData);
    const {
        label,
        batch,
        startDate,
        address,
        status
    } = listData;
    // let sql = 'insert into  `class-opening-plan`(label, batch, startDate, address, status ) values("' + label + '", " ' + batch + '", " ' + startDate + '", " ' + address + '", " ' + status + '" )';
    // let sql = 'insert into `class-open`(username, password)' + `values("${username}", "${password}" )`;
    let sql = 'insert into `class-opening-plan`(label,batch,startDate,address,status)' + `values("${label}","${batch}","${startDate}","${address}","${status}")`;
    // 拼接字符串。
    // let sql = 'insert into  `class-opening-plan`(label,batch,startDate,address,status) values ("' + label + '","'+batch+'"," ' + startDate + '","' + address + '"," ' + status + '")';
    // let sql = 'insert into + `class-opening-plan`(label,batch,startDate,address,status) values ("${label}","${batch}","${startDate}","${address}","${status}")';

    return new Promise((resolve, reject) => {
        database.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}