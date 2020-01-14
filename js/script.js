let songArray = [""]

songArray.forEach(function(guest) {
    $(".displaySongs").append(songNames)
});
//working click handler that stores information (idk about retrieving?)user input
songArray.push(newSong);
$("addButton").click(function() {
    let newSongPicture = $(".songPicture").val();
    let newSongName = $(".songName").val();
    let newSongDuration = $(".songDuration").val();
    let newSongUrl = $("songLink").val();
//pushes new items to song arrays + displays the result to the screen
  songArray.push(newSong);
  //append or display
  $(".songPicture").append(".displaySong");
  $(".songName").append(".displaySong");
  $(".songDuration").append(".displaySong");
  $(".songLink").append(".displaySong");

});