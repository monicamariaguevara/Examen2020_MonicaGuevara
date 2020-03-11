var express = require('express');
var lib = express.lib();

function initEmployee(db) {
  var empColl = require('./employeeColl')(db);
  var data = null;
  var bigThingTp = {
  'index':null,
  'guid':'',
  'isActive':false,
  'balance':null,
  'picture':'',
  'age':null,
  'eyecolor':'',
  'name':{
            'fisrt':'',
            'last':''
          },
  'company':'',
  'email':'',
  'phone':'',
  'address':'',
  'about':'',
  'registered':'',
  'latitude':'',
  'longitude':'',
  'tags':'[]',
  'range':'[]',
  'friends':'',
  'greeting':'',
  'favoriteFruit':''

};


lib.get('//all', function( req, res, next) {
      employeeModel.getEmployees(
          function(err, docs){
            if(err) {
              console.log(err);
              return res.status(500).json({error:"No funcionó"});
            }
            return res.status(200).json(docs);
          }
);



lib.get('/byid/:id', (req, res, next)=>{
  employeeModel.getEmployeesById(req.params.id, (err, Doc)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"Error al obtener el Thing"});
          }
          return res.status(200).json(Doc);
        } );
      });
  



lib.get('/bycompany/:company', (req, res, next)=>{
        employeeModel.getEmployeesByCompany((req.params.company || '').split('_'), (err, docs)=>{
                if(err){
                  console.log(err);
                  return res.status(500).json({"error":"No se encontro"});
                }else{
                  return res.status(200).json(docs);
                }
          } );
});



lib.get('/bytags/:tag', (req, res, next)=>{
  employeeModel.getEmployeesByTag((req.params.tag || '').split('_'), (err, docs)=>{
          if(err){
            console.log(err);
            return res.status(500).json({"error":"No se encontro"});
          }else{
            return res.status(200).json(docs);
          }
    } );
});



lib.put('/addtags/:id', (req, res, next)=>{
  employeeModel.addEmployeeATag((req.body.tags || '').split('|'), req.params.id, (err, rsult)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se puede actualizar "});
    }
    return res.status(200).json(rsult);
  });
});



lib.post('/new', function(req, res, next){
  var _thingsData = Object.assign({} , bigThingTp, req.body);
  var dateT = new Date();
  var dateD = new Date();
  dateD.setDate(dateT.getDate()+ 3);
  _thingsData.fcIng = dateT;
  _thingsData.due = dateD;
 

  employeeModel.addNewEmployee(_thingsData, (err, newEpml)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se puede agregar"});
    }
    return res.status(200).json(newEmpl);
  });



  lib.delete('/delete/:Id', function(req, res, next){
        var _id = req.params.id;
        employeeModel.removeEmployee(_Id, (err, result)=>{
          if(err){
            return res.status(500).json({"error":"No se pudo eliminar dato"});
          }
          return res.status(200).json(result);
        });
  return lib;
}

module.exports = employeeModel;
