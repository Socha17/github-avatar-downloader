var dlAvatars = require('./download_avatars');


var inputName = process.argv[2]
var inputRepo = process.argv[3]


// calls initial function
dlAvatars.getRepoContributors(inputName, inputRepo, function(err, result) {
  for (var i = 0; i < result.length; i++) {
      // calls function to start downloading avatars
    dlAvatars.downloadImageByURL(result[i].avatar_url, "avatars/" + result[i].login + ".jpg")
  }
})
