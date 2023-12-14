import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { GenresSongs } from './GenresSongs';
@Entity()
export class Genres {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  name: string;
  @Column(() => GenresSongs)
  songs: GenresSongs[];
}
