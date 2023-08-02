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
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.songs = [];
        Playlist.allPlaylists.push(this);
    }
    Playlist.prototype.addSong = function (song) {
        this.songs.push(song);
    };
    Playlist.prototype.getSongs = function () {
        return this.songs;
    };
    Playlist.getAllPlaylists = function () {
        return Playlist.allPlaylists;
    };
    Playlist.allPlaylists = [];
    return Playlist;
}());
var playlist = new Playlist();
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
playlist.addSong(jukebox.getRandomSong());
playlist.addSong(jukebox.getRandomSong());
var songsInPlaylist = playlist.getSongs();
console.log("Songs in Playlist:", songsInPlaylist);
var allPlaylists = Playlist.getAllPlaylists();
console.log("All Playlists:", allPlaylists);
