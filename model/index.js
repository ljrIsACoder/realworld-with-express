const mongoose = require('mongoose');
const {dbUri} = require("../config/config.default");

mongoose.connect(dbUri)

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
})
db.once('open', () => {
    console.log('MongoDB connection success');
})
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}
