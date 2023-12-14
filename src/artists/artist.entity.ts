import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { Albums } from './Albums';
import { Single } from './Single';

@Entity()
export class artists {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  biography: string;

  @Column(() => Single)
  songs: Single[];

  @Column(() => Albums)
  albums: Albums[];
}
