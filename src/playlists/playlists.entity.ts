import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Playlist {
  @ObjectIdColumn()
  id: number;

  @Column()
  playlistName: string;
}
