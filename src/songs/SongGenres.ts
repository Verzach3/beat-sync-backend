import { Column } from 'typeorm';

export class SongGenres {
  @Column()
  id: string;

  @Column()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
