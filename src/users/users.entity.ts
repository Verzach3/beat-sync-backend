import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

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

class UserData {
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  birthdate: string;

  @Column()
  gender: string;
}
