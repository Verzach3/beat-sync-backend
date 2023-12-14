import { Column } from 'typeorm';
import { ListSongs } from './ListSongs';

export class Albums {
  @Column()
  id: string;
  @Column()
  albumName: string;
  @Column()
  releaseDate: string;
  @Column(() => ListSongs)
  songs: ListSongs[];
}
