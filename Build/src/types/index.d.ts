interface ID3Tags {
  title?: string;
  artist?: string;
  album?: string;
  albumArtist?: string;
  year?: string;
  genre?: string;
  track?: string;
  trackTotal?: string;
  disc?: string;
  discTotal?: string;
  composer?: string;
  lyricist?: string;
  publisher?: string;
  copyright?: string;
  bpm?: string;
  initialKey?: string;
  mood?: string;
  isrc?: string;
  grouping?: string;
  encoder?: string;
  comment?: string;
  unsyncedLyrics?: string;
  website?: string;
}

interface SYLTFrame {
  type: number;
  text: [string, number][];
  timestampFormat: number;
  language: string;
  description: string;
}
