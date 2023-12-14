import { Column } from 'typeorm';

export class GenreArtists {
  @Column()
  id: string;
  @Column()
  name: string;
}
