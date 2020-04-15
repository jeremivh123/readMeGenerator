const axios = require("axios");
const fs = require("fs");
const inquire = require("inquire");

axios
    .get("https://api.github.com/user/repos")
    .then(function(res){
        console.log(res.data);
    });

    inquirer
    .prompt({
      message: "Enter your GitHub username:",
      name: "username"
    })
    .then(function({ username }) {
      const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
      axios.get(queryUrl).then(function(res) {
        const repoNames = res.data.map(function(repo) {
          return repo.name;
        });
  
        const repoNamesStr = repoNames.join("\n");
  
        fs.writeFile("repos.txt", repoNamesStr, function(err) {
          if (err) {
            throw err;
          }
  
          console.log(`Saved ${repoNames.length} repos`);
        });
      });
    });
  

const queryUrl = "https://api.github.com/user/repos";

let searchTerms=""

$ajax.(
    url: queryUrl + searchTerms
)

const questions = [

];

function writeToFile(README, data) {
}

function init() {

}

init();


