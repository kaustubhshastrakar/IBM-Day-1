var Jukebox = /** @class */ (function () {
    function Jukebox(songs) {
        this.songs = songs;
    }
    Jukebox.prototype.addSong = function (song) {
        this.songs.push(song);
    };
    Jukebox.prototype.removeSongByTitle = function (title) {
        this.songs = this.songs.filter(function (song) { return song.title !== title; });
    };
    Jukebox.prototype.getRandomSong = function () {
        var randomIndex = Math.floor(Math.random() * this.songs.length);
        return this.songs[randomIndex];
    };
    return Jukebox;
}());
var songs = [
    {
        title: "Enchanted",
        artist: "Taylor Swift",
        duration: 352,
    },
    {
        title: "invisible string",
        artist: "Taylor Swift",
        duration: 252,
    },
    {
        title: "In Pieces",
        artist: "Linkin Park",
        duration: 218,
    },
];
var jukebox = new Jukebox(songs);
jukebox.addSong({
    title: "Song 4",
    artist: "Artist 4",
    duration: 195,
});
jukebox.removeSongByTitle("invisible string");
var randomSong = jukebox.getRandomSong();
console.log("Random Song:", randomSong);
