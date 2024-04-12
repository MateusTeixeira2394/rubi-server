import { Injectable, NotFoundException } from "@nestjs/common";
import User from "./models/user.model";
import { MESSAGE_NOT_FOUND } from "./users.constants";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: "123abc",
      email: "user@corp.com",
      name: "user",
      roleId: 1,
      hashedPassword: "123abc",
    },
  ];

  public async findOne(email: string): Promise<User> {
    const user: User = await this.users.find(
      (currentUser) => email === currentUser.email
    );

    if (!user) throw new NotFoundException(MESSAGE_NOT_FOUND);

    return user;
  }
}
