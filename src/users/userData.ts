import { Column } from 'typeorm';

export class UserData {
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

  constructor(
    name: string,
    lastname: string,
    email: string,
    birthdate: string,
    gender: string,
  ) {
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.gender = gender;
  }
}
