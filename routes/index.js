
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  const name = req.params.name;
  res.render('partials/' + name);
};