import { Column } from 'typeorm';

export class Single {
  @Column()
  id: string;
  @Column()
  songName: string;
  @Column()
  duration: string;
}
