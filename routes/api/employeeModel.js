var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('emps');

  lib.getEmployees = (handler)=>{
    empColl.find({}).toArray(

            (err , docs) => {
              if(err){
                handler(err, null);
              }else{
                handler(null, docs);
              }
            }

           );
    return handler(new Error("No Implementado"), null);
  }



  // findOne
  // implementar
  // empCollener un Documento solo mostrar
  // email, phone, name y age

  lib.getEmployeesById = (id, handler) => {
    empColl.findOne({ "_id": new ObjectId(id)}, {'name','age','email','phone'},  (err, doc)=>{
        if(err){
          handler(err, null);
        }else{
          handler(null, doc);
        }
      });
    return handler(new Error("No Implementado"), null);
  }


  lib.getEmployeesByCompany = (company, handler) => {
    empColl.findOne({ "company": new ObjectId(company)}, {'name','age'','email'},  (err, doc)=>{
        if(err){
          handler(err, null);
        }else{
          handler(null, doc);
        }
      });
    // implementar
    // solo mostrar name, email, company
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByAgeRange = (ageLowLimit, ageHighLimit, handler) => {
    //implementar
    // Mostrar todos los documento incluyendo los extremos
    // que esten entre las edades indicadas por los parametros
    // ageLowLimit y ageHighLimit
    // solo mostrar name, age, email
    return handler(new Error("No Implementado"), null);
  }





  lib.getEmployeesByTag = (tag, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
  var updateObject = { "$set": { "tags": curatedTags}};
  empColl.updateOne({"_id": ObjectId(id)}, {'name','age','email'},, (err, rsult)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, rsult.result);
      }
  } );
    return handler(new Error("No Implementado"), null);
  }




  lib.addNewEmployee = (newEmpl, handler)=>{
    empColl.insertOne(newEmpl, (err, r)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, r.result);
      }
    });
  }


  //Implementar
  //Se requiere agregar a un documento un nuevo tag
  // $push

  lib.addEmployeeATag = ( tag, id, handler) => {
    var curatedTags = Array.isArray(tags)? tags: [tags];
        var updateObject = { "$set": { "tags": curatedTags}};   //-------"tags" representa el valor a cambiar
        empColl.updateOne({"_id": ObjectId(id)}, updateObject, (err, rsult)=>{
            if(err){
              handler(err, null);
            }else{
              handler(null, rsult.result);
            }
        } );

    return handler(new Error("No Implementado"), null);
}







  lib.removeEmployee = (id, handler) => {
    empColl.deleteOne({"_id": ObjectId(Id)}, (err, rslt)=>{
        if(err){
          console.log(err);
          handler(err, null);
        } else {
          handler(null, rslt.result);
        }
      });
    return handler(new Error("No Implementado"), null);
  }




  lib.increaseAgeToAll = (ageDelta, handler) => {
    //none
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
