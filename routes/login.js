var express = require('express');
var router = express.Router();
var db = require('../db.js').getDb();
router.route('/getLogin')
    .get(function (req, res) {
        var email= req.query.name;
        var password = req.query.pass;
        console.log(req.query);
        db.query('SELECT * FROM users WHERE name = ?',[email], function (error, results, fields) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        if (error) {
          console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":error
          })
        }else{
            // results=JSON.parse(results);
          console.log('The solution is: ', results);
          if(results.length >0){
            if(results[0].pass === password){
              res.send({
                "code":200,
                "success":"login sucessfull"
                  });
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exits"
                });
          }
        }
        });
     


    });

    router.route('/signUp')
    .get(function (req, res) {
        var email= req.query.name;
        var password = req.query.pass;
        let num=req.query.number;
        console.log(req.query);
        // db.connect(function(err) {
        //   if (err) throw err;
        //   console.log("Connected!");
          var sql = `INSERT INTO users VALUES ('${email}','${password}','${num}')`;
          console.log(sql);
          db.query(sql,function (err, result) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            if (err) {
              res.send({
                "code":204,
                "success":"Error while accessing DB"
                  });
              console.log(err); 
            }
            else{
              res.send({
                "code":200,
                "success":"login sucessfull"
                  });
              console.log("1 record inserted");
            }
            
          });
        // });

     


    });

    module.exports = router;