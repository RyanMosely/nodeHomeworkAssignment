


const axios = require("axios");
const fs = require("fs");
const pdf = require('html-pdf');
const inquirer = require("inquirer");



let html = fs.readFileSync('./index.html', 'utf8');
let options = { format: 'Letter' };

//jonathan-major
//JonPSmith



let arr = [];





inquirer
  .prompt(
    {
      type: "input",
      message: "What is your favorite color?",
      name: "color"
    })
    .then(function(response) {

      console.log(response);

      arr.push(`${JSON.stringify(response).replace(/[{}]/g, '')}`);


      fs.writeFile("./gitText.json", `{${arr.join(", \n")}}`, function(err) {

        if(err) {
            return console.log(err);
        }
      
        console.log("Color file was saved!");


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
          console.log(jData);


          //let picture = document.querySelector("img");


         // picture.attr('src', jData.picture);

         console.log("Hello!!!");


        

            
        
          
          
          
        })
        .catch(function(err) {
          console.log(err);
        });
        

        

        
      }); 
    }).then(function(){
      console.log('doo');
    })
    


axios
  .get("https://api.github.com/users/ardalis/starred")
  .then(function(res) {
console.log(res.data.length);
arr.push(`"stars": "${res.data.length}"`)

fs.writeFile("./gitText.json", `{${arr.join(", \n")}}`, function(err) {

  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
}); 

  })

axios
  .get("https://api.github.com/users/RyanMosely")
  .then(function(res) {
//console.log(res);
   
    
    

    arr.push(`"picture": "${res.data.avatar_url}"`);
    arr.push(`"userName": "${res.data.login}"`);
    arr.push(`"location": "${res.data.location}"`);
    arr.push(`"profile": "${res.data.html_url}"`);
    arr.push(`"blog": "${res.data.blog}"`);
    arr.push(`"bio": "${res.data.bio}"`);
    arr.push(`"pubRepos": "${res.data.public_repos}"`);
    arr.push(`"followers": "${res.data.followers}"`);
    //arr.push(`"stars": "${res.data.location}"`);
    arr.push(`"following": "${res.data.following}"`);

    console.log(`[${arr[1]}]`);



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
      
        console.log("The file was saved!");
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