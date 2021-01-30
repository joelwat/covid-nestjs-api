import { DateTime } from 'luxon';

export class User {
  id: number;

  email: string;

  firstName?: string;

  lastName?: string;

  password?: string;

  createdOn: DateTime;

  updatedOn: DateTime;

  lastLogin?: DateTime;

  resetToken?: string;

  resetExpires?: DateTime;

  constructor(init: User) {
    this.id = init.id;
    this.email = init.email;
    this.createdOn = init.createdOn;
    this.updatedOn = init.updatedOn;

    Object.assign(this, init);
  }
}
