require('dotenv/config');
var request = require('request');
var fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!');

//    function gathers and parses JSON data, then returns to callBack
function getRepoContributors(repoOwner, repoName, cb) {
  // ...
    var options = {
      url: 'https://'+ process.env.GITHUB_USER + ':' + process.env.GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
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



module.exports = {
  getRepoContributors: getRepoContributors,
  downloadImageByURL: downloadImageByURL
}
