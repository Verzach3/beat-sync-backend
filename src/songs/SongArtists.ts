import { Column } from 'typeorm';

export class SongArtists {
  @Column()
  id: string;

  @Column()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
