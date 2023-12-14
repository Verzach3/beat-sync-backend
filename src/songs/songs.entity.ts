import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { SongArtists } from './SongArtists';
import { SongGenres } from './SongGenres';
import { IsString } from 'class-validator';
import { SongAlbum } from './SongAlbum';

@Entity()
export class Song {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  @IsString()
  songName: string;
  @Column()
  @IsString()
  duration: string;
  @Column(() => SongAlbum)
  album?: SongAlbum;
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
