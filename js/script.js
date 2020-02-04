var info = {
  artistName: "Ariana Grande",
  songName: "Bloodline",
  songDuration: "2:41",
  songLink: "https://www.youtube.com/watch?v=uKqRAC-JNOM",
  songImage: "https://pm1.narvii.com/7030/fd824c1faf66bc0b0af267e7f589b3da25647cc7r1-1080-1080v2_hq.jpg",
}

let playlist = [info];

$("#addButton").click(function(){
    playlist.forEach(function(song){
        $(".displayInfo").append("<p> artistName:" + song["artistName"] + "</p>");

        $(".displayInfo").append("<p> songName:" + song["songName"] + "</p>");

        $(".displayInfo").append("<p> songDuration:" + song["songDuration"] + "</p>");

        $(".displayInfo").append("<p> songLink:" + song["songLink"] + "</p>");

        $(".displayInfo").append("<p> songImage:" + song["songImage"] + "</p>");
    
    });
});