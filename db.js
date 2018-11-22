var mysql      = require('mysql');
var _db;
module.exports = {
  getConnection: function(callback) {  
     _db = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'pass',
      database : 'test'
    });
        callback();
  },

  getDb: function() {  
    return _db;  
  }
};