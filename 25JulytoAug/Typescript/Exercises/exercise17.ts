interface Song {
    title: string;
    artist: string;
    duration: number; // in seconds
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
  
  
  jukebox.addSong({
    title: "Song 4",
  artist: "Artist 4",
  duration: 195,
  });
  
  
  jukebox.removeSongByTitle("invisible string");
  
  
  const randomSong = jukebox.getRandomSong();
  console.log("Random Song:", randomSong);
  
  