import { Column } from 'typeorm';

export class UserData {
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  birthdate: string;

  @Column()
  gender: string;

  constructor(
    name: string,
    lastname: string,
    birthdate: string,
    gender: string,
  ) {
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.gender = gender;
  }
}
