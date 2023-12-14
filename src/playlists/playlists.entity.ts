import { Column, Entity, ObjectIdColumn, ObjectId } from 'typeorm';
import { PlaylistSongs } from './PlaylistSongs';
import { PlaylistAuthor } from './PlaylistAuthor';

@Entity()
export class Playlists {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column(() => PlaylistSongs)
  songs: PlaylistSongs[];
  @Column(() => PlaylistAuthor)
  Autor: PlaylistAuthor[];
}
