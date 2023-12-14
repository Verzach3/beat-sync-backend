import { Column } from 'typeorm';
import { GenresAlbums } from './GenresAlbums';
import { GenreArtists } from './GenreArtists';

export class GenresSongs {
  @Column()
  id: string;
  @Column()
  name: string;
  @Column(() => GenresAlbums)
  albums: GenresAlbums[];
  @Column()
  single: boolean;
  @Column(() => GenreArtists)
  artists: GenreArtists[];
}
