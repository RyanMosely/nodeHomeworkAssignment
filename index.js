


const axios = require("axios");
const fs = require("fs");
const pdf = require('html-pdf');
const inquirer = require("inquirer");



//jonathan-major
//JonPSmith

//MattTheDev



let arr = [];

axios
  .get("https://api.github.com/users/ardalis/starred")
  .then(function(res) {
//console.log(res.data.length);
arr.push(`"stars": "${res.data.length}"`)

fs.writeFile("./gitText.json", `{${arr.join(", \n")}}`, function(err) {

  if(err) {
      return console.log(err);
  }

  //console.log("The file was saved!");
}); 

  });



inquirer
  .prompt(
    [{
      type: "input",
      message: "What is your github username?",
      name: "userName"
    },

    {
      type: "input",
      message: "What is your favorite color?",
      name: "color"
    }])
    .then(function(response) {

      //console.log(response);

      arr.push(`${JSON.stringify(response).replace(/[{}]/g, '')}`);


      



      axios
  .get(`https://api.github.com/users/${response.userName}`)
  .then(function(res) {
//console.log(res);
   
    
    
    arr.push(`"name": "${res.data.name}"`);
    arr.push(`"picture": "${res.data.avatar_url}"`);
    arr.push(`"location": "${res.data.location}"`);
    arr.push(`"profile": "${res.data.html_url}"`);
    arr.push(`"blog": "${res.data.blog}"`);
    arr.push(`"bio": "${res.data.bio}"`);
    arr.push(`"pubRepos": "${res.data.public_repos}"`);
    arr.push(`"followers": "${res.data.followers}"`);
    //arr.push(`"stars": "${res.data.location}"`);
    arr.push(`"following": "${res.data.following}"`);

    //console.log(" ");




      fs.writeFile("./gitText.json", `{${arr.join(", \n")}}`, function(err) {

        if(err) {
            return console.log(err);
        }

        



      
        //console.log("Color file was saved!");

        console.log("Success!")


        function readFileAsync(path, encoding) {
          return new Promise(function(resolve, reject) {
            fs.readFile(path, encoding, function(err, data) {
              if (err) {
                return reject(err);
              }
        
              resolve(data);
            });
          });
        }
      
        readFileAsync("gitText.json", "utf8")
        .then(function(data) {
          let jData = JSON.parse(data);
          //console.log(jData);


          //let picture = document.querySelector("img");


         // picture.attr('src', jData.picture);

         //console.log("Hello!!!");


         var html = `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Unna&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style.css">
<style>
body {

display: block;
font-family: 'Unna', serif;
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
background-color: ${jData.color};
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

.row .col-6{
  margin: 0px !important;
    padding: 0px !important;
    text-align: center
}

a {
  color: #FFFFFF;
  text-decoration: none!important;
  border-bottom: none;
}


h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

h3{
  font-size: 2rem;
}

.cardData{
  font-size: 2rem;
}

</style>

<title>Document</title>
</head>
<body>

<div class="test">
    <img src=${jData.picture} class=proPic alt="Cats">
</div>
    

    <div class="card headSection allCards">
            <div class="card-body howdy allCards">
             <h1>Hi!</h1> <h2>My name is ${jData.name}</h2><br>
             <a href="https://www.google.com/maps/place/${jData.location}">${jData.location}</a> | <a href="${jData.profile}">GitHub</a> | <a href="${jData.blog}">Blog</a> 
          </div>
          </div>


  <div class="card mainSection">
    <div class="card-body">

        <div class="cardsHead">
        <h3>${jData.bio}</h3>

        </div>

            <div class="container">
                    <div class="row">
                      <div class="col-xs-6">

        <div class="card allCards topLeft">
            <div class="card-body">
              <h2>Public Repositories</h2>  <div class="cardData">${jData.pubRepos}</div>
            </div>
          </div>

          </div>

          <div class="col-xs-6">

          <div class="card allCards topRight">
            <div class="card-body">
            <h2>Followers</h2>  <div class="cardData">${jData.followers}</div>
            </div>
          </div>

          </div>
          </div>

          <div class="row">
                <div class="col-xs-6">

          <div class="card allCards bottomLeft">
            <div class="card-body">
            <h2>GitHub Stars</h2>   <div class="cardData">${jData.stars}</div>
            </div>
          </div>

          </div>

          <div class="col-xs-6">

          <div class="card allCards bottomRight">
            <div class="card-body">
            <h2>Following</h2>  <div class="cardData">${jData.following}</div>
            </div>
          </div>

          </div>

    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js">
  
 
  
  </script>
  <script>
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

        "height": "34in",        // allowed units: mm, cm, in, px
        "width": "18in",        // allowed units: mm, cm, in, px

        "base": "./style.css",

        "zoomFactor" : "1"
      }

               
 




pdf.create(html, options).toFile('./prof.pdf', function(err, res) {
  if (err) return console.log(err);
  //console.log(res); // { filename: '/app/businesscard.pdf' }
});


        

            
        
          
          
          
        })
        .catch(function(err) {
          console.log(err);
        });
        

        

        
      }); 
    }).then(function(){
      //console.log('doo');
    })
    








    /*
* Profile image
* user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

*/

    


    fs.writeFile("./gitText.json", `{${arr.join(", \n")}}`, function(err) {

        if(err) {
            return console.log(err);
        }
      
        //console.log("The file was saved!");
      }); 


      
    


  });






 
/*
  * Profile image
* user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

*/