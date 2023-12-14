import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

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

class SongArtists {
  @Column()
  id: ObjectId;

  @Column()
  name: string;
}

class SongGenres {
  @Column()
  id: ObjectId;

  @Column()
  name: string;
}
