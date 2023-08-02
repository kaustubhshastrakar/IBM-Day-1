interface Song {
    title: string;
    artist: string;
    duration: number; 
  }
  
  class Jukebox {
    private songs: Song[];
  
    constructor(songs: Song[]) {
      this.songs = songs;
    }
  
    public addSong(song: Song): void {
      this.songs.push(song);
    }
  
    public removeSongByTitle(title: string): void {
      this.songs = this.songs.filter((song) => song.title !== title);
    }
  
    
    public getRandomSong(): Song {
      const randomIndex = Math.floor(Math.random() * this.songs.length);
      return this.songs[randomIndex];
    }
  }
  
  
  class Playlist {
    private songs: Song[]; 
    private static allPlaylists: Playlist[] = []; 
  
    constructor() {
      this.songs = [];
      Playlist.allPlaylists.push(this);
    }
  
    
    public addSong(song: Song): void {
      this.songs.push(song);
    }
  
    
    public getSongs(): Song[] {
      return this.songs;
    }
  
    
    public static getAllPlaylists(): Playlist[] {
      return Playlist.allPlaylists;
    }
  }
  
  
  
  
  const playlist = new Playlist();
  
  
  const songs: Song[] = [
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
  
  const jukebox = new Jukebox(songs);
  
  
  playlist.addSong(jukebox.getRandomSong());
  playlist.addSong(jukebox.getRandomSong());
  
  
  const songsInPlaylist = playlist.getSongs();
  console.log("Songs in Playlist:", songsInPlaylist);
  
  
  const allPlaylists = Playlist.getAllPlaylists();
  console.log("All Playlists:", allPlaylists);
  
  
  
  
  