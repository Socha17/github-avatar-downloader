var request = require('request')
var fs = require('fs');


var GITHUB_USER = "Socha17";
var GITHUB_TOKEN = "9265542cbc5b4a4e32379c67f3d3655d8ed8f793";


console.log('Welcome to the GitHub Avatar Downloader!');
function getRepoContributors(repoOwner, repoName, cb) {
  // ...

  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'request'
    }
  }
  request(options, function(err, response, body) {
    if (err) throw err;
    console.log('Response Status Code:', response.statusCode);


    var json = JSON.parse(body)
    cb(null,json)
  });

}

function downloadImageByURL(url, filePath) {
  // ...

  request.get(url, filePath)               // Note 1
         .on('error', function (err) {                                   // Note 2
           throw err;
         })
         .on('response', function (response) {                           // Note 3
           console.log('Response headers type: ', response.headers['content-type']);
           console.log('Downloading file...');
         })
         .on('end', function () {
           console.log('complete downloaded to' + filePath);
         })
         .pipe(fs.createWriteStream(filePath)
         )



}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  for (var i = 0; i < result.length; i++) {
    console.log("Avatar_url:", result[i].avatar_url);

  }
  downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")
});
