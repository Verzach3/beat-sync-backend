import { Column } from 'typeorm';

export class GenresAlbums {
  @Column()
  id: string;
  @Column()
  albumName: string;
  @Column()
  duration: string;
}
