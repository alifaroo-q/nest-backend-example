var dataSource = require('typeorm').DataSource;
var dbConfig = require('./ormconfig');

var sqliteDataSource = new dataSource(dbConfig);

module.exports = sqliteDataSource;
