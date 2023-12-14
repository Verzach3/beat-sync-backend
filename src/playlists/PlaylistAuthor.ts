import { Column } from 'typeorm';

export class PlaylistAuthor {
  @Column()
  id: string;
  @Column()
  name: string;
}
