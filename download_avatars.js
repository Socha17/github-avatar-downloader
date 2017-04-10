var request = require('request');

var GITHUB_USER = "Socha17";
var GITHUB_TOKEN = "9265542cbc5b4a4e32379c67f3d3655d8ed8f793";

var repoOwner = 'Socha17';
var repoName = 'github-avatar-downloader';

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log(requestURL);

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
