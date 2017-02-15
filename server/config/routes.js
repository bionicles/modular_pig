var pigs = require('../controllers/pigs.js');


module.exports = function(app) {


  app.get('/', function(req, res) {
    console.log("GET / - display index");
    pigs.show(res);
  })


  app.get("/pigs/new", function(req, res){
    console.log('GET /pigs/new - display new pig form')
    res.render("new");
  })


  app.get("/pigs/:id", function(req, res){
    console.log("GET /pigs/:id - display one pig")
    console.log("ID: ", req.params.id);
    pigs.show_one(req, res);
  })


  app.post("/pigs", function(req, res){
    console.log("adding", req.body.name, " the pig!");
    pigs.create(req, res);
  })


  app.get("/pigs/edit/:id", function(req, res){
    console.log('GET /pigs/edit/:id - show pig editor form')
    pigs.edit(req, res);
  })


  app.post("/pigs/id", function(req, res){
    console.log('POST /pigs/id - execute pig edit')
    pigs.update(req, res);
  })


  app.post("/pigs/destroy/:id", function(req, res){
    console.log('POST /pigs/destroy/:id - delete a pig');
    pigs.destroy(req, res)
  })
}
