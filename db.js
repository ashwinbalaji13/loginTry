var mysql      = require('mysql');
var _db;
module.exports = {
  getConnection: function(callback) {  
     _db = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'admin',
      database : 'first'
    });
        callback();
  },

  getDb: function() {  
    return _db;  
  }
};