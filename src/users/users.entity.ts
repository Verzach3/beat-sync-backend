import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { UserData } from './userData';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column(() => UserData)
  data: UserData;
}
