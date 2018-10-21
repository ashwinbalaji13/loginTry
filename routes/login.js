var express = require('express');
var router = express.Router();
var db = require('../db.js').getDb();
router.route('/getLogin')
    .get(function (req, res) {
        var email= req.query.name;
        var password = req.query.pass;
        console.log(req.query);
        db.query('SELECT * FROM firsttable WHERE name = ?',[email], function (error, results, fields) {
        if (error) {
          // console.log("error ocurred",error);
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

    module.exports = router;