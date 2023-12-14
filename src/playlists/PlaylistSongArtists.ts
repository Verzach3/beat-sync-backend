import { Column } from 'typeorm';

export class PlaylistSongArtists {
  @Column()
  id: string;
  @Column()
  name: string;
}
