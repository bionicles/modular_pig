var mongoose = require('mongoose');
var Pig = mongoose.model('Pig');
module.exports = {
  show: function(res) {
    Pig.find({}, function(err, pigs) {
      if (err){
        console.log(err);
      } else {
        res.render('index', {pigs: pigs});
      }
    })
  },
  create: function(req, res) {
    var pig = new Pig({name: req.body.name});
    pig.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/');
      }
    })
  },
  show_one: function(req, res) {
    Pig.find({_id: req.params.id}, function(err, pig){
      if (err){
        console.log("ERROR: ", err);
      } else {
        console.log("pig: ", pig.name)
        res.render('pig', {pig: pig});
      }
    })
  },
  edit: function(req, res) {
    console.log(req.params.id);
    Pig.findOne({_id: req.params.id}, function(err, pig){
      if (err){
        console.log("ERROR: ", err);
      } else {
        console.log("pig name: ", pig.name);
        res.render('edit', {pig: pig});
      }
    })
  },
  update: function(req, res) {
    var id = req.body.id;
    Pig.update({_id: id}, {name: req.body.name}, function(err){
      if (err){
        console.log(err);
      } else {
        console.log("updated ", req.body.name);
      } res.redirect('/');
    })
  },
  destroy: function(req,res) {
    var id = req.params.id;
    Pig.remove({_id: id}, function(err){
      if (err){
        console.log("Pig not deleted")
      } else {
        console.log("Peace out, pig!")
      } res.redirect("/");
    })
  }
}
