
const fs = require("fs");
var pdf = require('html-pdf');



var html = `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="style.css">
<style>
body {

display: block;
text-align: center;
margin: 8px;
margin-top: 8px;
margin-right: 0px;
margin-bottom: 8px;
margin-left: 0px;
background-color: #879cdf;
}

.mainSection {
background-color: #e9edee;
padding: 3%;
margin-top: -2%;
margin-bottom: 20%;
}

.headSection {
background-color: #ff8374;
color: white;
padding: 3%;
padding-top: 8%;
margin-top: -7%;
margin-left: 20px;
margin-right: 20px;
position: relative;
z-index: 1;
}


.allCards {
background-color: #ff8374;
margin: 10px;
color: white;
}

.cardsHead {
text-align: center;
padding: 35px;
}


img {
position: relative;
z-index: 4;
margin-left: auto;
margin-right: auto;
height: 330px;
width: 330px;
border-radius: 50%;
border: solid 7px #fee14c;
object-fit: cover;
}


</style>

<title>Document</title>
</head>
<body>

<div class="test">
    <img src="https://avatars3.githubusercontent.com/u/51306056?v=4" class=proPic alt="Cats">
</div>
    

    <div class="card headSection">
            <div class="card-body howdy">
              
            </div>
          </div>


  <div class="card mainSection">
    <div class="card-body">

        <div class="cardsHead">I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code
                I build things and teach people to code

        </div>

            <div class="container">
                    <div class="row">
                      <div class="col-6">

        <div class="card allCards topLeft">
            <div class="card-body">
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
              This is some text within a card body.
            </div>
          </div>

          </div>

          <div class="col-6">

          <div class="card allCards topRight">
            <div class="card-body">
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
            </div>
          </div>

          </div>
          </div>

          <div class="row">
                <div class="col-6">

          <div class="card allCards bottomLeft">
            <div class="card-body">
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
            </div>
          </div>

          </div>

          <div class="col-6">

          <div class="card allCards bottomRight">
            <div class="card-body">
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
                    This is some text within a card body.
            </div>
          </div>

          </div>

    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js">
  
 
  
  </script>
  <script>
  
  
  $.getJSON( "./gitText.json", function( data ) {
console.log(data);
});
  </script>
  <script src="script.js"></script>
  <script src="index.js"></script>

</body>`
var options = {  
    "border": {
        "top": "2in",            // default is 0, units: mm, cm, in, px
        "right": "1in",
        "bottom": "2in",
        "left": "1.5in",},

        "height": "20in",        // allowed units: mm, cm, in, px
        "width": "18in",        // allowed units: mm, cm, in, px

        "base": "./style.css"
      }

               
 




pdf.create(html, options).toFile('./prof.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});