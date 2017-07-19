var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'APP KEY MANAGER' });
});

router.get('/releaseappkey', function(req, res){
  res.render('releaseappkey', {
    title: 'Release App Key'
  });
});

router.get('/deleteappkey', function(req, res){
  res.render('deleteappkey', {
    title: 'Delete App Key'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});


//TESTE DE BOTAO E TEXT AREA releaseappkey
router.post('/releaseappkey', function (req, res) {
    console.log(req.body.email);
    console.log(req.body.keyquantity);
    res.send('Hora do Palmeira Brincar?');
});

//TESTE DE BOTAO E TEXT AREA deleteappkey
router.post('/', function (req, res) {
    console.log(req.body.emaildelete);
    console.log(req.body.keycodedelete);
    res.send('Hora do Palmeira Brincar?');
});

module.exports = router;
