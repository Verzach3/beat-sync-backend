import { Column } from 'typeorm';

export class SongAlbum {
  @Column()
  id: number;
  @Column()
  name: string;
}
