import { DateTime } from 'luxon';

import { User } from 'src/entities';

export class UserDAO {
  static create(user: User) {

  }

  static find(/* id: number */): User {
    return new User({
      id: 1,
      email: 'foo@bar.com',
      createdOn: DateTime.utc(),
      updatedOn: DateTime.utc(),
    });
  }

  static findAll(): User[] {
    return [
      new User({
        id: 1,
        email: 'foo@bar.com',
        createdOn: DateTime.utc(),
        updatedOn: DateTime.utc(),
      }),
    ];
  }
}
