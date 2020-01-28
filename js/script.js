var obj = {
    Artist_Name: "Ariana Grande",
    Song_Title: "Bloodline",
    Duration: "2:41",
    Link:"dfaa",
    Image: "asda",

}

let playlist = [obj]


$(".addButton").click(function(){
    playlist.forEach(function(song){
        $(".displaySongs").append("<p> Artist_Name: "+song["Artist_Name"]+"</p>");
        $(".displaySongs").append("<p> Song_Title: "+song["Song_Title"]+"</p>");
        $(".displaySongs").append("<p> Duration: "+song["Duration"]+"</p>");
        $(".displaySongs").append("<p> Link: "+song["Link"]+"</p>");
        $(".displaySongs").append("<p> Image: "+song["Image"]+"</p>");
});
//match 

//working click handler that stores information (idk about retrieving?)user input
songArray.push(newSong);
    $("addButton").click(function() {
        let newSong_Title = $(".song").val();
        let newSong_Title = $(".song").val();
        
        let newSongPicture = $(".songPicture").val();
        let newSongName = $(".songName").val();
        let newSongDuration = $(".songDuration").val();
        let newSongUrl = $("songLink").val();

    });
//pushes new items to song arrays + displays the result to the screen
  songArray.push(newSong);
  //append or display
  $(".songPicture").append(".displaySong");
  $(".songName").append(".displaySong");
  $(".songDuration").append(".displaySong");
  $(".songLink").append(".displaySong");

});