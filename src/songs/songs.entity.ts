import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { SongArtists } from './SongArtists';
import { SongGenres } from './SongGenres';

@Entity()
export class Songs {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  songName: string;
  @Column()
  duration: string;
  @Column()
  album?: string;
  @Column()
  single: boolean;
  @Column(() => SongArtists)
  artists: SongArtists[];
  @Column(() => SongGenres)
  genre: SongGenres[];
  @Column()
  year: string;
  @Column()
  path: string;
}
