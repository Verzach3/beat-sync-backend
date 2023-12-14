import { Column } from 'typeorm';

export class ListSongs {
  @Column()
  id: string;
  @Column()
  songName: string;
  @Column()
  duration: string;
}
