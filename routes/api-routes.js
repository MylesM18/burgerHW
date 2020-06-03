var db = require("../models");

module.exports = function(app) {
    
   app.post('/api/burgers', (req,res)=>{
     console.log('hitting burger route!')
     db.burgers.create(req.body, {devoured:false}).then(data=>console.log(data))
   })

   app.put('/api/burgers/:id', (req,res)=>{
     db.burgers.update({devoured:true},{where: {id:req.params.id}})
     .then(data=> res.json('ok'))
   })

   app.delete('/api/burgers/:id', (req,res)=>{
    db.burgers.destroy({where: {id:req.params.id}})
    .then(data=> res.json('ok'))
  })
}