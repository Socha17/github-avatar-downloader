var request = require('request');
var fs = require('fs');

//  U
var GITHUB_USER = "Socha17";
var GITHUB_TOKEN = "9265542cbc5b4a4e32379c67f3d3655d8ed8f793";


console.log('Welcome to the GitHub Avatar Downloader!');

//    function gathers and parses JSON data, then returns to callBack
function getRepoContributors(repoOwner, repoName, cb) {
  // ...
    var options = {
      url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
      headers: {'User-Agent': 'request'}
    }

    request(options, function(err, response, body) {
      if (err) throw err;
      var json = JSON.parse(body)
      cb(null,json)
    });

}

//      function downloads avatars and files them appropriately
function downloadImageByURL(url, filePath) {
  // ...
         request(url, filePath)
         .on('error', function (err) {
           throw err;
         })
         .on('response', function (response) {
           console.log('Response headers type: ', response.headers['content-type']);
           console.log('Downloading file...');
         })
         .on('end', function () {
           console.log('complete downloaded to ' + filePath);
         })
         .pipe(fs.createWriteStream(filePath)
         )
}

  // calls initial function
// getRepoContributors("jquery", "jquery", function(err, result) {
//   for (var i = 0; i < result.length; i++) {
//       // calls function to start downloading avatars
//     downloadImageByURL(result[i].avatar_url, "avatars/" + result[i].login + ".jpg")
//   }
// });


module.exports = {
  getRepoContributors: getRepoContributors,
  downloadImageByURL: downloadImageByURL
}
