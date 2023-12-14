import { Column } from 'typeorm';
import { PlaylistSongArtists } from './PlaylistSongArtists';

export class PlaylistSongs {
  @Column()
  id: string;
  @Column()
  name: string;
  @Column()
  duration: string;
  @Column()
  album?: string;
  @Column()
  single: boolean;
  @Column(() => PlaylistSongArtists)
  artists: PlaylistSongArtists[];
  @Column()
  Genre: string;
}
